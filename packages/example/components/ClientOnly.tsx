import {FC, ReactNode, useEffect, useState} from 'react'

const ClientOnly = ({children}: {children: ReactNode}) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return <>{children}</>
}

export default ClientOnly
