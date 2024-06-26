const { Router } = require('express')
const { characteristicsValues } = require('../../api/controller')
const router = new Router()

router.post('/create', characteristicsValues.create)
router.get('/getAll', characteristicsValues.getAll)
router.get('/:id', characteristicsValues.get)

module.exports = router