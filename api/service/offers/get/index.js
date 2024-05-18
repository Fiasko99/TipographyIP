const ApiError = require('../../../../exception')
const { offers } = require('../../../repository')

module.exports = async (reqParams) => {
  const data = await offers.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}