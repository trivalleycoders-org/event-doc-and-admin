import express from 'express'
import { red, yellow, redf } from '../logger'

const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const database = () => 'EventsTest'
const url = () => 'mongodb://localhost:27017'
import { ObjectID } from  'mongodb'

export const isValidObjectID = (id) => {
  return ObjectID.isValid(id)
}

export const objectIdFromHexString = (hexId) => {
  if (isValidObjectID(hexId)) {
    return ObjectID.createFromHexString(hexId)
  } else {
    throw `Invalid objectId: ${hexId}`
  }
}



const eventBefore = {
  _id: '5b673573d63a2d4c54bb7351',
  category: 'startup',
  cityName: 'San Ramon',
  endDateTime: '2018-06-12T17:00:00.000Z',
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  linkToUrl: 'http://briia.io',
  organization: 'BRIIA',
  postalCode: '94582',
  price: 75,
  startDateTime: '2018-06-12T16:00:00.000Z',
  stateCode: 'CA',
  tags: [ 'health' ],
  title: 'BRIIA Investor Demo Day',
  venueName: 'Dublin Concert Hall',
}

const eventAfter = {
  // _id: '5b673573d63a2d4c54bb7351',
  category: 'startup',
  cityName: 'San Ramon',
  endDateTime: '2018-06-12T17:00:00.000Z',
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  linkToUrl: 'http://briia.io',
  organization: 'new org',
  postalCode: '94582',
  price: 75,
  startDateTime: '2018-06-12T16:00:00.000Z',
  stateCode: 'CA',
  tags: [ 'health' ],
  title: 'BRIIA Investor Demo Day',
  venueName: 'Dublin Concert Hall',
}


const findOneAndUpdate = async ( collection, filter, returnOriginal = false ) => {
  try {
    const id = '5b673573d63a2d4c54bb7351'
    const objId = objectIdFromHexString(id)

    const client = await MongoClient.connect(url(), { useNewUrlParser: true })
    const db = await client.db(database())
    const ret = await db.collection(collection).findOneAndUpdate(
      { _id: objId},
      // { organization: 'BRIIA'},
      { $set: filter },
      { returnOriginal: returnOriginal }
    )
    yellow('dbFunctions.findOneAndUpdate: ret', ret)
    return ret
  }
  catch (e) {
    redf('ERROR: dbFunctions.findOneAndUpdate', e)
  }
}

router.get('/', async (req, res) => {
  const filter = { organization: 'changed-org-7' }
  const ret = await findOneAndUpdate('events', filter)
  res.send(JSON.stringify(ret))
})

export default router
