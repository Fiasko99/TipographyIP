const categories = require('./categories')
const characteristics = require('./characteristics')
const characteristicsValues = require('./characteristics-values')
const offers = require('./offers')
const offersCharacteristicsValues = require('./offers-characteristics-values')
const products = require('./products')
const productsCharacteristics = require('./products-characteristics')
const users = require('./users')

module.exports = {
  users,
  characteristics,
  offers,
  characteristicsValues,
  products,
  productsCharacteristics,
  offersCharacteristicsValues,
  categories,
}