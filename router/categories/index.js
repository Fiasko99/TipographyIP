const { Router } = require('express')
const { categories } = require('../../api/controller')
const router = new Router()

router.post('/create', categories.create)
router.get('/getAll', categories.getAll)
router.get('/:id', categories.get)

module.exports = router