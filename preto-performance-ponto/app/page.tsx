import { Clock } from '@/components/Clock'
import { PontoButton } from '@/components/PontoButton'

export default function Ponto() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Registro de Ponto</h1>
      <Clock />
      <PontoButton />
    </div>
  )
}
