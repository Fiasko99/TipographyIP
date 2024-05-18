const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.characteristicsValues.create(body)

  return data.toJSON()
}