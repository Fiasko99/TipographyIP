const { offersCharacteristicsValues } = require('../../../repository')

module.exports = async () => {
  const data = await offersCharacteristicsValues.getAll()

  return data
}