const { Router } = require('express')
const { products } = require('../../api/controller')
const router = new Router()

router.post('/create', products.create)
router.get('/:id', products.get)

module.exports = router