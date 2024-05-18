const { offers } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await offers.getAll()
    return res.json(data)
  } catch (e) {
    next(e)
  }
}