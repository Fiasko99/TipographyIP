const { products } = require('../../../repository')

module.exports = async () => {
  const data = await products.getAll()

  return data
}