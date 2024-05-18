const { Router } = require('express')
const { productsCharacteristics } = require('../../api/controller')
const router = new Router()

router.post('/create', productsCharacteristics.create)
router.get('/getAll', productsCharacteristics.getAll)
router.get('/:id', productsCharacteristics.get)

module.exports = router