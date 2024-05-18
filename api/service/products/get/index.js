const ApiError = require('../../../../exception')
const { products } = require('../../../repository')

module.exports = async (reqParams) => {
  const data = await products.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}