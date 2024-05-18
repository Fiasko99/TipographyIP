const { offersCharacteristicsValues } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    const data = await offersCharacteristicsValues.create(req.body)
    return res.json(data)
  } catch (e) {
    next(e)
  }
}