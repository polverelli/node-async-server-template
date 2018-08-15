import express from 'express'
import userRoute from './user.route'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Welcome to SP Core Server API')
})

router.use('/user', userRoute)

export default router
