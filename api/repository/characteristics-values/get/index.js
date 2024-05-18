const { db } = require('../../../../orm')

module.exports = async (where) => {
  const query = {
    where,
  }
  const data = await db.characteristicsValues.findOne(query)

  return data && data.toJSON()
}