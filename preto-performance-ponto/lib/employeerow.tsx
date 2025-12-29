import { Employee } from '@/lib/adminMock'

export default function EmployeeRow({ e }: { e: Employee }) {
  const colorMap: any = {
    PRESENTE: 'var(--green)',
    ATRASADO: 'var(--yellow)',
    AUSENTE: 'var(--red)'
  }

  return (
    <tr>
      <td>{e.name}</td>
      <td style={{ color: colorMap[e.status], fontWeight: 600 }}>
        {e.status}
      </td>
      <td>{e.ultimoPonto}</td>
      <td>
        <button>Ver</button>
        <button style={{ marginLeft: 8 }}>Editar</button>
        <button style={{ marginLeft: 8 }}>Excluir</button>
      </td>
    </tr>
  )
}
