const { characteristicsValues } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await characteristicsValues.create(req.body)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}