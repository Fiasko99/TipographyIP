const { categories } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await categories.create(req.body)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}