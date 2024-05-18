const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.productsCharacteristics.create(body)

  return data.toJSON()
}