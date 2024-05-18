const { db } = require('../../../../orm')

module.exports = async () => {
  const data = await db.offers.findAll()

  return data
}