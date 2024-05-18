const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.offers.create(body)

  return data.toJSON()
}