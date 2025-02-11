import Router from 'express'

const router = new Router()

router.post('/registration')
router.post('/login')
router.post('/logout')
router.post('/activate/:link')
router.get('/refresh')
router.get('/users')

module.exports = router