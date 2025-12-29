import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name } = await req.json()
  const user = db.users.find(u => u.name === name)

  if (!user) {
    return NextResponse.json({ error: 'Usuário inválido' }, { status: 401 })
  }

  return NextResponse.json(user)
}
