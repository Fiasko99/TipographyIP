const ApiError = require('../../../../exception')
const { 
  minLoginLength,
  minPasswordLength,
  minNameLength,
  minFirstnameLength,
  minPhoneLength,
} = require('../../constants')

const validateMail = (mail) => {
  const indexSymbolDog = mail.indexOf('@')
  const indexSymbolDot = mail.indexOf('.')
  const notLast = indexSymbolDog < mail.length
  const notFirstOrnotFound = indexSymbolDog > 0
  const notAfterDot = indexSymbolDog < indexSymbolDot
  return notFirstOrnotFound && notLast && notAfterDot
}

module.exports = async (req, _, next) => {
  const { 
    login, 
    password,
    name,
    firstname,
    phone,
    email,
  } = req.body

  !login && next(ApiError.InputError('Пустое поле логина'))
  !password && next(ApiError.InputError('Пустое поле пароля'))
  !firstname && next(ApiError.InputError('Пустое поле никнейма'))
  !name && next(ApiError.InputError('Пустое поле никнейма'))
  !phone && next(ApiError.InputError('Пустое поле никнейма'))
  !email && next(ApiError.InputError('Пустое поле почты'))
  login.length < minLoginLength && next(ApiError.InputError(`Длина логина должна быть не менее ${minLoginLength}`))
  password.length < minPasswordLength && next(ApiError.InputError(`Длина пароля должна быть не менее ${minPasswordLength}`))
  name.length < minNameLength && next(ApiError.InputError(`Длина никнейма должна быть не менее ${minNicknameLength}`))
  firstname.length < minFirstnameLength && next(ApiError.InputError(`Длина никнейма должна быть не менее ${minNicknameLength}`))
  phone.length < minPhoneLength && next(ApiError.InputError(`Длина никнейма должна быть не менее ${minNicknameLength}`))
  !validateMail(email) && next(ApiError.InputError('Неверный формат почты'))

  next()
}