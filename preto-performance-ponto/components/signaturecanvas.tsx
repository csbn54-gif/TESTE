import { useRef, useState } from 'react'

export default function SignatureCanvas({ onSave }: { onSave: (data: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [drawing, setDrawing] = useState(false)

  function start(e: any) {
    setDrawing(true)
    draw(e)
  }

  function end() {
    setDrawing(false)
  }

  function draw(e: any) {
    if (!drawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const rect = canvas.getBoundingClientRect()

    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#fff'

    ctx.lineTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    )
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(
      e.clientX - rect.left,
      e.clientY - rect.top
    )
  }

  function salvar() {
    const data = canvasRef.current?.toDataURL()
    if (data) onSave(data)
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={300}
        height={150}
        style={{ border: '1px solid #444', background: '#000' }}
        onMouseDown={start}
        onMouseUp={end}
        onMouseMove={draw}
      />
      <button onClick={salvar} style={{ marginTop: 8 }}>
        Salvar assinatura
      </button>
    </div>
  )
}
