const { Router } = require('express')
const { products } = require('../../api/controller')
const router = new Router()

router.post('/create', products.create)
router.get('/getAll', products.getAll)
router.get('/:id', products.get)

module.exports = router