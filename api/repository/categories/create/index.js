const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.categories.create(body)

  return data.toJSON()
}