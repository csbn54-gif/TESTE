import mongoose from 'mongoose'

const PontoSchema = new mongoose.Schema({
  tipo: String,
  data: Date,
  assinatura: String,
  location: Object,
  navegador: String
})

export default mongoose.models.Ponto ||
  mongoose.model('Ponto', PontoSchema)
