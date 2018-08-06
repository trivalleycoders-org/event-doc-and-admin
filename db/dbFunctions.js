import { red, yellow, redf } from '../logger'
const MongoClient = require('mongodb').MongoClient
import { dbName, mongoUrl, objectIdFromHexString } from '../db/config'

export const insertOne = async (collection, data) => {
  yellow('collection', collection)
  yellow('data', data)
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017')
    const db = await client.db('EventsDev')
    const ret = await db.collection(collection).insertOne(data)
    return { data: ret.ops, meta: { n: 1 } }
  }
  catch (e) {
    redf('ERROR: dbFunctions.insert', e.message)
    // return returnError(e)
  }

}

export const findOneAndUpdate = async ( collection, id, filter, returnOriginal = false ) => {
  try {
    const objId = objectIdFromHexString(id)
    const client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true })
    const db = await client.db(dbName)
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
