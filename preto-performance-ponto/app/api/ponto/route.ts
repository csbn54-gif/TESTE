import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
  const body = await req.json()
  db.pontos.push(body)
  return NextResponse.json({ ok: true })
}
