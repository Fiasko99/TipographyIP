const { characteristics } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await characteristics.create(req.body)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}