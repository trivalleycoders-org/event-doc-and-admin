import { red, yellow, redf, greenf } from '../logger'
require('dotenv').load()
import { ObjectID } from  'mongodb'

const nodeEnv = process.env.NODE_ENV
yellow('NODE_ENV', nodeEnv)

export const dbName = (() => {
  if (nodeEnv === 'development') {
    return process.env.DB_NAME_TEST
  } else if (nodeEnv === 'test') {
    return process.env.DB_NAME_TEST
  } else if (nodeEnv === 'production') {
    return process.env.DB_NAME_PROD
  }
})()
yellow('database', dbName)

export const mongoUrl = (() => {
  if (nodeEnv === 'development') {
    redf('TODO', 'change next line when done')
    return process.env.MONGODB_URL_DEV
  } else if (nodeEnv === 'test') {
    return process.env.MONGODB_URL_TEST
  } else if (nodeEnv === 'production') {
    return process.env.MONGODB_URL_PROD
  }
})()
yellow('mongoUrl', mongoUrl)

const isValidObjectID = (id) => {
  return ObjectID.isValid(id)
}

export const objectIdFromHexString = (hexId) => {
  if (isValidObjectID(hexId)) {
    return ObjectID.createFromHexString(hexId)
  } else {
    throw `Invalid objectId: ${hexId}`
  }
}
