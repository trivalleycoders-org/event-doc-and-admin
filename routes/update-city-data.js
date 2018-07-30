import express from 'express'
import { red, yellow } from '../logger'
import { clone, dissoc, has, merge } from 'ramda'

const MongoClient = require('mongodb').MongoClient

const router = express.Router()

const database = 'EventsDev'
const collection = 'cities'
const url = 'mongodb://localhost:27017'

router.get('/', async (req, res) => {
  let updated = 0
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
    const db = await client.db(database)

    const ret = await db.collection('cities').find({state: 'AZ'}).forEach(x => {
      db.collection(collection).update(
        { _id: x._id },
        { $set: { postalCode: x.postalCode.toString() } }
      )
      updated++
      console.log('updated', updated)
    })
    res.send(`${updated} records updated`)
  }
  catch (e) {
    red('convertZipToString', e)
  }

})


const padLeft = (str, num) => {
  let strNew
  typeof str === 'number'
    ? strNew = str.toString()
    : strNew = str
  // yellow('strNew', typeof strNew)
  return '0'.repeat(num - strNew.length) + strNew
}

const hasCountyCode = has('countyCode')
router.get('/get-test', async (req, res) => {
  let updated = 0
  let retArr = []
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
    const db = await client.db(database)
    // stateCode: 'MA'
    // cityName: 'APO AE'
    const ret = await db.collection('cities').find({}).forEach(c => {
      // yellow('c.postalCode', c.postalCode)

      // postalCode
      const postalCode = padLeft(c.postalCode, 5)
      const m1 = merge(c, { postalCode: postalCode })
      let m2
      // countyCode
      if (hasCountyCode(m1)) {
        const countyCode = padLeft(c.countyCode, 3)
        m2 = merge(m1, {countyCode: countyCode})
      } else {
        m2 = clone(m1)
      }
      // yellow('postalCode', `${str} (${strLen})`)
      retArr.push(m2)
    })
    let updated = 0
    for (let i=0; i<retArr.length; i++) {
      await db.collection('postalCodes').insert(retArr[i])
      updated++
      yellow('inserting', i)
    }

    res.send(`${updated} records updated`)
    // res.send(JSON.stringify(retArr))
  }
  catch (e) {
    red('convertZipToString', e)
  }

})


export default router
