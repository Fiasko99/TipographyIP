const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.products.create(body)

  return data.toJSON()
}