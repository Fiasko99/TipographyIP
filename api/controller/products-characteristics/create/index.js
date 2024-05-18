const { productsCharacteristics } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await productsCharacteristics.create(req.body)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}