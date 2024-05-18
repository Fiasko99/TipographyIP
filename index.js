// @config
require('dotenv').config()

// @external
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// @internal
const { orm, db } = require('./orm')
const router = require('./router')
const { error } = require('./middleware')
const createDefaultData = require("./createDefaultData")
const port = process.env.PORT
const app = express()

app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL, 'http://127.0.0.1:7000'],
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({
  extended: true,
}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/postman/index.html')
})
app.use('/api', router)
app.use(error)

orm.sync({alter: true, force: true}).then(async () => {
  console.info("База данных подключена")
  createDefaultData(db).then(() => {
    console.info('Данные загружены')
  })
  app.listen(port, () => {
    console.info(`Сервер запущен`)
    console.info(`Ссылка: http://localhost:${port}`)
  })
}).catch(e => console.error(e))
