'use client'
import { useState } from 'react'
import { SignaturePad } from './SignaturePad'

export function PontoButton() {
  const [tipo, setTipo] = useState<'ENTRADA' | 'SAIDA'>('ENTRADA')
  const [assinatura, setAssinatura] = useState<string | null>(null)

  async function registrar() {
    await fetch('/api/ponto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tipo,
        horario: new Date().toISOString(),
        assinatura,
        navegador: navigator.userAgent
      })
    })
    setTipo(tipo === 'ENTRADA' ? 'SAIDA' : 'ENTRADA')
  }

  return (
    <>
      <button onClick={registrar}>Registrar {tipo}</button>
      <SignaturePad onSave={setAssinatura} />
    </>
  )
}
