'use client'
import { useRef } from 'react'

export function SignaturePad({ onSave }: { onSave: (v: string) => void }) {
  const ref = useRef<HTMLCanvasElement>(null)

  function save() {
    onSave(ref.current!.toDataURL())
  }

  return (
    <>
      <canvas ref={ref} width={300} height={120} style={{ border: '1px solid #333' }} />
      <button onClick={save}>Salvar assinatura</button>
    </>
  )
}
