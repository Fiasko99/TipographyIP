const { Router } = require('express')
const router = new Router()

const user = require('./user')
const categories = require('./categories')
const characteristics = require('./characteristics')
const characteristicsValues = require('./characteristics-values')
const offers = require('./offers')
const offersCharacteristicsValues = require('./offers-characteristics-values')
const products = require('./products')
const productsCharacteristics = require('./products-characteristics')

router.use('/user', user)
router.use('/categories', categories)
router.use('/characteristics', characteristics)
router.use('/characteristicsValues', characteristicsValues)
router.use('/offers', offers)
router.use('/offersCharacteristicsValues', offersCharacteristicsValues)
router.use('/products', products)
router.use('/productsCharacteristics', productsCharacteristics)

module.exports = router
