const { db } = require('../../../../orm')

module.exports = async () => {
  const data = await db.products.findAll()

  return data
}