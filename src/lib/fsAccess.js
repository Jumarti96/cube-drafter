import {
  STORES,
  idbGet,
  idbPut,
  openDB,
  txDone,
} from './idb.js'

const KEY = 'cubes-root'

export async function saveDirectoryHandle(handle) {
  await idbPut(STORES.handles, handle, KEY)
}

export async function loadDirectoryHandle() {
  const handle = await idbGet(STORES.handles, KEY)
  if (!handle) return null

  let perm = await handle.queryPermission({ mode: 'read' })
  if (perm !== 'granted') {
    perm = await handle.requestPermission({ mode: 'read' })
  }
  return perm === 'granted' ? handle : null
}

export async function pickDirectory() {
  if (!window.showDirectoryPicker) {
    const err = new Error('BROWSER_UNSUPPORTED')
    err.i18nKey = 'errors.browserUnsupported'
    throw err
  }
  const handle = await window.showDirectoryPicker({ mode: 'read' })
  await saveDirectoryHandle(handle)
  return handle
}

export async function getDirectoryFromDrop(dataTransfer) {
  const items = [...(dataTransfer?.items ?? [])]
  if (!items.length) return null

  // Must call getAsFileSystemHandle() synchronously during the drop event
  const handlePromises = items
    .filter(item => item.kind === 'file' && item.getAsFileSystemHandle)
    .map(item => item.getAsFileSystemHandle())

  if (!handlePromises.length) return null

  const handles = await Promise.all(
    handlePromises.map(p => p.catch(() => null))
  )

  const dirHandle = handles.find(h => h?.kind === 'directory')
  if (dirHandle) {
    await saveDirectoryHandle(dirHandle)
    return dirHandle
  }

  return null
}

export async function fileExists(dirHandle, filename) {
  try {
    await dirHandle.getFileHandle(filename)
    return true
  } catch {
    return false
  }
}

export async function readTextFile(dirHandle, filename) {
  try {
    const fileHandle = await dirHandle.getFileHandle(filename)
    const file = await fileHandle.getFile()
    return await file.text()
  } catch {
    return null
  }
}

export async function findCubesDir(rootHandle) {
  const hasCubesSubdir = await fileExists(rootHandle, 'cubes')
  if (hasCubesSubdir) {
    try {
      const cubesDir = await rootHandle.getDirectoryHandle('cubes')
      return { cubesDir, label: `${rootHandle.name}/cubes` }
    } catch {
      // fall through
    }
  }
  return { cubesDir: rootHandle, label: rootHandle.name }
}

export async function getCubeHandle(cubesDirHandle, slug) {
  return cubesDirHandle.getDirectoryHandle(slug)
}

// Re-export for modules that need direct DB access
export { openDB, txDone, STORES }
