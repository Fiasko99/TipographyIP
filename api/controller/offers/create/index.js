const { offers } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await offers.create(req.body)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}