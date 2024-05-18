const { productsCharacteristics } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await productsCharacteristics.getAll()
    return res.json(data)
  } catch (e) {
    next(e)
  }
}