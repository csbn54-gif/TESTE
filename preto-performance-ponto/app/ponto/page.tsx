'use client'

import PontoButton from '@/components/PontoButton'
import SignatureCanvas from '@/components/SignatureCanvas'
import { useClock } from '@/lib/useClock'
import { useGeolocation } from '@/lib/useGeolocation'

export default function PontoPage() {
  const time = useClock()
  const { location } = useGeolocation()

  function salvarAssinatura(data: string) {
    console.log('✍️ Assinatura:', data)
  }

  return (
    <div style={{
  width: '100%',
  padding: 16,
  textAlign: 'center'
}}>
      <img src="/logo.png" width={120} />

      <h1>{time.toLocaleTimeString()}</h1>

      <PontoButton />

      <SignatureCanvas onSave={salvarAssinatura} />

      {location && (
        <small>
          📍 {location.lat}, {location.lng}
        </small>
      )}
    </div>
  )
}
