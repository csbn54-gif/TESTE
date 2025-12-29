type Props = {
  status: 'PRESENTE' | 'ATRASADO' | 'FALTA' | 'LICENCA'
}

export function StatusBadge({ status }: Props) {
  const map: any = {
    PRESENTE: 'var(--green)',
    ATRASADO: 'var(--yellow)',
    FALTA: 'var(--red)',
    LICENCA: 'var(--blue)'
  }

  return (
    <span style={{
      color: map[status],
      fontWeight: 600
    }}>
      {status}
    </span>
  )
}
