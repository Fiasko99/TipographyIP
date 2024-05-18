const { db } = require('../../../../orm')

module.exports = async () => {
  const data = await db.characteristics.findAll()

  return data
}