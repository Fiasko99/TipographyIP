const { db } = require('../../../../orm')

module.exports = async () => {
  const data = await db.categories.findAll()

  return data
}