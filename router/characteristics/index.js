const { Router } = require('express')
const { characteristics } = require('../../api/controller')
const router = new Router()

router.post('/create', characteristics.create)
router.get('/:id', characteristics.get)

module.exports = router