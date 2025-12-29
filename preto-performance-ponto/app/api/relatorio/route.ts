import { NextResponse } from 'next/server'
import { gerarPDF } from '@/lib/pdf'

export async function GET() {
  const resumo = { presenca: 90, horas: 160, faltas: 2 }
  const pdf = gerarPDF(resumo)

  const chunks: any[] = []
  pdf.on('data', c => chunks.push(c))
  pdf.end()

  const buffer = Buffer.concat(chunks)

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=espelho.pdf'
    }
  })
}
