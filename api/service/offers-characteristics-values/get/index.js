const ApiError = require('../../../../exception')
const { offersCharacteristicsValues } = require('../../../repository')

module.exports = async (reqParams) => {
  const data = await offersCharacteristicsValues.get(reqParams)
  if (!data) {
    throw ApiError.NotFound()
  }

  return data
}