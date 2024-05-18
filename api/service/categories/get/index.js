const ApiError = require('../../../../exception')
const { categories } = require('../../../repository')

module.exports = async (reqParams) => {
  const data = await categories.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}