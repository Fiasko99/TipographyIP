const { db } = require('../../../../orm')

module.exports = async (where) => {
  const query = {
    where,
  }
  const data = await db.categories.findOne(query)

  return data && data.toJSON()
}