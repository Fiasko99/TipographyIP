const { db } = require('../../../../orm')

module.exports = async (where) => {
  const query = {
    where,
  }
  const data = await db.productsCharacteristics.findOne(query)

  return data && data.toJSON()
}