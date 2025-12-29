import AdminSidebar from '@/components/AdminSidebar'
import EmployeeRow from '@/components/EmployeeRow'
import { employees } from '@/lib/adminMock'
import { isAdmin } from '@/lib/auth'

const userMock = { role: 'ADMIN' }

export default function AdminPage() {
  if (!isAdmin(userMock)) {
    return <div>Acesso negado</div>
  }

  return (
    <div style={{ display: 'flex' }}>
      <AdminSidebar />

      <main style={{ padding: 32, width: '100%' }}>
        <h1>Funcionárias</h1>

        <button style={{ marginBottom: 16 }}>
          + Adicionar Funcionária
        </button>

        <table width="100%">
          <thead>
            <tr>
              <th align="left">Nome</th>
              <th align="left">Status</th>
              <th align="left">Último ponto</th>
              <th align="left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(e => (
              <EmployeeRow key={e.id} e={e} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
