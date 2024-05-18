const { categories } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await categories.get(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}