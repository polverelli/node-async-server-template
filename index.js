import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes/index.route'
import { createLog } from './utils/others'

const app = express()
const router = express.Router()
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes);

app.listen(port, () => {
  const date = new Date()

  console.log(`${date} - Server is running on port: ${port}`)
})
