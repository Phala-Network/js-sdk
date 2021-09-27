import {FC, useEffect, useState} from 'react'

const useIsClient = (): boolean => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export default useIsClient
