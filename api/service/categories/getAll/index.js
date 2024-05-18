const { categories } = require('../../../repository')

module.exports = async () => {
  const data = await categories.getAll()

  return data
}