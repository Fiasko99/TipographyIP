const { characteristicsValues } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await characteristicsValues.get(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}