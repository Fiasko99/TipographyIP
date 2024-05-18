const user = require('./user')
const token = require('./token')
const categories = require('./categories')
const characteristics = require('./characteristics')
const characteristicsValues = require('./characteristics-values')
const offers = require('./offers')
const offersCharacteristicsValues = require('./offers-characteristics-values')
const products = require('./products')
const productsCharacteristics = require('./products-characteristics')

module.exports = {
  user,
  token,
  categories,
  characteristics,
  characteristicsValues,
  offers,
  offersCharacteristicsValues,
  products,
  productsCharacteristics,
}