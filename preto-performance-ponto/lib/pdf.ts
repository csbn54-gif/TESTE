import PDFDocument from 'pdfkit'

export function gerarPDF(resumo: any) {
  const doc = new PDFDocument()

  doc.fontSize(18).text('Espelho Mensal', { align: 'center' })
  doc.moveDown()

  doc.fontSize(12)
  doc.text(`Presença: ${resumo.presenca}%`)
  doc.text(`Horas: ${resumo.horas}`)
  doc.text(`Faltas: ${resumo.faltas}`)

  doc.moveDown()
  doc.text(`Gerado em: ${new Date().toLocaleString()}`)

  return doc
}
