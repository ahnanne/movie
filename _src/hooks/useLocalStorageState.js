import { useState, useEffect, useRef } from 'react'

const { localStorage: storage } = window

/* -------------------------------------------------------------------------- */

export default function useLocalStorageState(
  key,
  initialValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = storage.getItem(key)
    console.log(valueInLocalStorage)
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage)
      } catch (error) {
        storage.removeItem(key)
      }
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      storage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    storage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}
