import { useEffect, useState } from 'react'

export function useGeolocation() {
  const [location, setLocation] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalização não suportada')
      return
    }

    navigator.geolocation.getCurrentPosition(
      pos => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        })
      },
      err => {
        setError(err.message)
      }
    )
  }, [])

  return { location, error }
}
