'use client'
import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const i = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(i)
  }, [])

  return <div style={{ fontSize: 48 }}>{time}</div>
}
