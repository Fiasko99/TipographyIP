const { characteristicsValues } = require('../../../repository')

module.exports = async () => {
  const data = await characteristicsValues.getAll()

  return data
}