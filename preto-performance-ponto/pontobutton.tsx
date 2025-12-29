import { useState } from 'react'

export default function PontoButton() {
  const [tipo, setTipo] = useState<'ENTRADA' | 'SAIDA'>('ENTRADA')

  function registrar() {
    console.log('🕒 Registro de ponto:', {
      tipo,
      data: new Date().toISOString(),
      navegador: navigator.userAgent
    })

    setTipo(tipo === 'ENTRADA' ? 'SAIDA' : 'ENTRADA')
  }

  return (
    <button
      onClick={registrar}
      style={{
        padding: 24,
        fontSize: 24,
        background: '#000',
        color: '#fff',
        border: '2px solid #0f0'
      }}
    >
      {tipo}
    </button>
  )
}
