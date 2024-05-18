const ApiError = require('../../../../exception')
const { characteristicsValues } = require('../../../repository')

module.exports = async (reqParams) => {
  const data = await characteristicsValues.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}