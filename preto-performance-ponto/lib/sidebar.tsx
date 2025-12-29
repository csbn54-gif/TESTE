export default function AdminSidebar() {
  return (
    <aside style={{
      width: 220,
      background: '#000',
      color: '#fff',
      padding: 24,
      height: '100vh'
    }}>
      <img src="/logo.png" width={120} style={{ marginBottom: 32 }} />

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <a>Dashboard</a>
        <a>Funcionárias</a>
        <a>Relatórios</a>
      </nav>
    </aside>
  )
}
