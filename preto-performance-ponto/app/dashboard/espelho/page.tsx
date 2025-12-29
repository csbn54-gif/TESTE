import { calcularResumo, Dia } from '@/lib/calculos'
import { StatusBadge } from '@/components/StatusBadge'

const diasMock: Dia[] = [
  { dia: 1, status: 'PRESENTE', horas: 8 },
  { dia: 2, status: 'ATRASADO', horas: 7 },
  { dia: 3, status: 'FALTA', horas: 0 },
  { dia: 4, status: 'PRESENTE', horas: 8 },
  { dia: 5, status: 'LICENCA', horas: 0 }
]

export default function Espelho() {
  const resumo = calcularResumo(diasMock)

  return (
    <div style={{ padding: 24 }}>
      <h1>Espelho Mensal</h1>

      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <div>Presença: {resumo.presenca}%</div>
        <div>Horas: {resumo.horas}h</div>
        <div>Faltas: {resumo.faltas}</div>
      </div>

      <table width="100%">
        <thead>
          <tr>
            <th align="left">Dia</th>
            <th align="left">Status</th>
            <th align="left">Horas</th>
          </tr>
        </thead>
        <tbody>
          {diasMock.map(d => (
            <tr key={d.dia}>
              <td>{d.dia}</td>
              <td><StatusBadge status={d.status} /></td>
              <td>{d.horas}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 24 }}>
        <button>Exportar PDF</button>
        <button style={{ marginLeft: 12 }}>Exportar CSV</button>
      </div>
    </div>
  )
}
