import express from 'express'
const router = express.Router()

router.get('/', async (req, res, next) => {
  return res.send('Henlo Warudo')
})

export default router
