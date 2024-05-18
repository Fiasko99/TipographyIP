const { Router } = require('express')
const { offersCharacteristicsValues } = require('../../api/controller')
const router = new Router()

router.post('/create', offersCharacteristicsValues.create)
router.get('/:id', offersCharacteristicsValues.get)

module.exports = router