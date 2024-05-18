const { productsCharacteristics } = require('../../../repository')

module.exports = async () => {
  const data = await productsCharacteristics.getAll()

  return data
}