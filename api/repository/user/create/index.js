const { db } = require('../../../../orm')

module.exports = async (body) => {
  const data = await db.users.create(body)

  return data.toJSON()
}