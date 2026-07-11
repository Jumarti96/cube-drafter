const DB_NAME = 'cube-drafter'
const DB_VERSION = 1
const STORE = 'handles'
const KEY = 'cubes-root'

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error)
    req.onsuccess = () => resolve(req.result)
    req.onupgradeneeded = (e) => {
      const db = e.target.result
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE)
      }
    }
  })
}

function txDone(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function saveDirectoryHandle(handle) {
  const db = await openDB()
  const tx = db.transaction(STORE, 'readwrite')
  tx.objectStore(STORE).put(handle, KEY)
  await txDone(tx)
  db.close()
}

export async function loadDirectoryHandle() {
  const db = await openDB()
  const tx = db.transaction(STORE, 'readonly')
  const handle = await new Promise((resolve, reject) => {
    const req = tx.objectStore(STORE).get(KEY)
    req.onsuccess = () => resolve(req.result ?? null)
    req.onerror = () => reject(req.error)
  })
  db.close()
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
