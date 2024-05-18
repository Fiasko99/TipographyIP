const { db } = require('../../../../orm')

module.exports = async (where) => {
  const query = {
    where,
  }
  const data = await db.offersCharacteristicsValues.findOne(query)

  return data && data.toJSON()
}