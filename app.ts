import cors from 'cors'
import express, { Application } from 'express'
import router from './routes/index'
const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.use('/api/v1', router)

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'book catalog routes working fine',
  })
})

export default app
