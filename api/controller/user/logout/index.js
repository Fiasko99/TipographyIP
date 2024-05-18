const { user, token } = require('../../../service')

module.exports = async (req, res, next) => {
  try {
    res.clearCookie('refreshToken')
    return res.end()
  } catch (e) {
    next(e)
  }
}