import 'dotenv/config'
import express from 'express'
import cors from 'express'
import userRoute from './user/infrastructure/route/user.route'

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.use(userRoute)

app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`))
