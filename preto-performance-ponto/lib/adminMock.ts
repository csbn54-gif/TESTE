export type Employee = {
  id: number
  name: string
  status: 'PRESENTE' | 'ATRASADO' | 'AUSENTE'
  ultimoPonto: string
}

export const employees: Employee[] = [
  { id: 1, name: 'Ana Silva', status: 'PRESENTE', ultimoPonto: '08:01' },
  { id: 2, name: 'Maria Souza', status: 'ATRASADO', ultimoPonto: '08:19' },
  { id: 3, name: 'Joana Lima', status: 'AUSENTE', ultimoPonto: '--' }
]
