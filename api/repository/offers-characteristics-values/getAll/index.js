const { db } = require('../../../../orm')

module.exports = async () => {
  const data = await db.offersCharacteristicsValues.findAll()

  return data
}