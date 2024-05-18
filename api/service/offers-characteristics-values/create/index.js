const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.offersCharacteristicsValues.create(body)

  return data.toJSON()
}