const { categories } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await categories.getAll()
    return res.json(data)
  } catch (e) {
    next(e)
  }
}