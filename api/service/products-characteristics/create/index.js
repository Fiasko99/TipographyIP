const ApiError = require('../../../../exception')
const { productsCharacteristics } = require('../../../repository')

module.exports = async (reqParams) => {
  const data = await productsCharacteristics.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}