const { characteristics } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await characteristics.getAll()
    return res.json(data)
  } catch (e) {
    next(e)
  }
}