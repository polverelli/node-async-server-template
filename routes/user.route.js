import express from 'express'
import userController from '../controllers/user.controller'
import asyncMiddleware from '../utils/asyncMiddleware'

const router = express.Router()

router.get('/:id', asyncMiddleware(userController.get))

export default router
