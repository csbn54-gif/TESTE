import { connectMongo } from '@/lib/mongo'
import Ponto from '@/models/Ponto'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  await connectMongo()

  const body = await req.json()
  await Ponto.create(body)

  return NextResponse.json({ success: true })
}
