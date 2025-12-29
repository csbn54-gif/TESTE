export type Dia = {
  dia: number
  status: 'PRESENTE' | 'ATRASADO' | 'FALTA' | 'LICENCA'
  horas: number
}

export function calcularResumo(dias: Dia[]) {
  const totalDias = dias.length
  const presentes = dias.filter(d => d.status === 'PRESENTE').length
  const faltas = dias.filter(d => d.status === 'FALTA').length
  const horas = dias.reduce((s, d) => s + d.horas, 0)

  return {
    presenca: Math.round((presentes / totalDias) * 100),
    faltas,
    horas
  }
}
