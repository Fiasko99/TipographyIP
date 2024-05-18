const { db } = require('../../../../orm')

module.exports = async () => {
  const data = await db.characteristicsValues.findAll()

  return data
}