const { offers } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await offers.get(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}