const { offersCharacteristicsValues } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await offersCharacteristicsValues.get(req.params)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}