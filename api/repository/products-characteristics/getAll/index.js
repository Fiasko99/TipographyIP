const { db } = require('../../../../orm')

module.exports = async () => {
  const data = await db.productsCharacteristics.findAll()

  return data
}