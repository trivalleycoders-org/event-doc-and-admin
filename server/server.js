import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import {greenf, redf, yellow} from '../logger'
// import cities from '../routes/cities'
import citiesLookup from '../routes/citiesLookup'
import convertZipToString from '../routes/convertZipToString'
require('dotenv').config()

// green('node env=', process.env.NODE_ENV)
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

// routes
// app.use('/cities', cities)
app.use('/cities-lookup', citiesLookup)
app.use('/convert-zip', convertZipToString)

app.get('/', (req, res) => {
  redf('Invalid endpoint!')
  res.send('Invalid endpoint!')
})

app.listen(port, () => {
  greenf('server started - ', port)
})

export default app