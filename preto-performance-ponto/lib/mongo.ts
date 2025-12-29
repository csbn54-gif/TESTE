import mongoose from 'mongoose'

const MONGODB_URI = 'COLE_AQUI_SUA_STRING_DO_MONGO_ATLAS'

if (!MONGODB_URI) {
  throw new Error('MongoDB URI não definida')
}

export async function connectMongo() {
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(MONGODB_URI)
}
