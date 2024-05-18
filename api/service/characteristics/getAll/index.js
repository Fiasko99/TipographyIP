const { characteristics } = require('../../../repository')

module.exports = async () => {
  const data = await characteristics.getAll()

  return data
}