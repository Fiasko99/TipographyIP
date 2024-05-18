const { offers } = require('../../../repository')

module.exports = async () => {
  const data = await offers.getAll()

  return data
}