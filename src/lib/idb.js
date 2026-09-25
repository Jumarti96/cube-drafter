export const DB_NAME = 'cube-drafter'
export const DB_VERSION = 2

export const STORES = {
  handles: 'handles',
  sessions: 'sessions',
  prefs: 'prefs',
}

export function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error)
    req.onsuccess = () => resolve(req.result)
    req.onupgradeneeded = (e) => {
      const db = e.target.result
      if (!db.objectStoreNames.contains(STORES.handles)) {
        db.createObjectStore(STORES.handles)
      }
      if (!db.objectStoreNames.contains(STORES.sessions)) {
        db.createObjectStore(STORES.sessions)
      }
      if (!db.objectStoreNames.contains(STORES.prefs)) {
        db.createObjectStore(STORES.prefs)
      }
    }
  })
}

export function txDone(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function idbGet(storeName, key) {
  const db = await openDB()
  const tx = db.transaction(storeName, 'readonly')
  const value = await new Promise((resolve, reject) => {
    const req = tx.objectStore(storeName).get(key)
    req.onsuccess = () => resolve(req.result ?? null)
    req.onerror = () => reject(req.error)
  })
  db.close()
  return value
}

export async function idbPut(storeName, value, key) {
  const db = await openDB()
  const tx = db.transaction(storeName, 'readwrite')
  tx.objectStore(storeName).put(value, key)
  await txDone(tx)
  db.close()
}

export async function idbDelete(storeName, key) {
  const db = await openDB()
  const tx = db.transaction(storeName, 'readwrite')
  tx.objectStore(storeName).delete(key)
  await txDone(tx)
  db.close()
}

export async function idbGetAll(storeName) {
  const db = await openDB()
  const tx = db.transaction(storeName, 'readonly')
  const entries = await new Promise((resolve, reject) => {
    const req = tx.objectStore(storeName).getAll()
    req.onsuccess = () => resolve(req.result ?? [])
    req.onerror = () => reject(req.error)
  })
  db.close()
  return entries
}

export async function idbGetAllKeys(storeName) {
  const db = await openDB()
  const tx = db.transaction(storeName, 'readonly')
  const keys = await new Promise((resolve, reject) => {
    const req = tx.objectStore(storeName).getAllKeys()
    req.onsuccess = () => resolve(req.result ?? [])
    req.onerror = () => reject(req.error)
  })
  db.close()
  return keys
}
