import { useEffect, useState } from 'react'

export function useLocalStorageBoolean(key: string, defaultValue: boolean) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}
