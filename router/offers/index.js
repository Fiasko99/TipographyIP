const { Router } = require('express')
const { offers } = require('../../api/controller')
const router = new Router()

router.post('/create', offers.create)
router.get('/:id', offers.get)

module.exports = router