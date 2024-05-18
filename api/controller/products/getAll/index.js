const { products } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await products.getAll()
    return res.json(data)
  } catch (e) {
    next(e)
  }
}