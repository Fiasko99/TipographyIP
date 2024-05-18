const ApiError = require('../../../../exception')
const { characteristics } = require('../../../repository')

module.exports = async (reqParams) => {
  const data = await characteristics.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}