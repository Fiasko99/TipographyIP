const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.characteristics.create(body)

  return data.toJSON()
}