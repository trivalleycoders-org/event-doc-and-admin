#DB Access & Methods

While the Mongoose infrastructure is still availble it is not being used or loaded. Data access is being done via projectRoot/db which uses the native MongoDB driver.

We can go back to Mongoose if you want but I started to find cases where it was easier to go around it and I have yet to find any value in Mongoose. I was debating that with Kevin today and he felt I was probably wrong but I'm getting more done this way :).

All db access methods are in /db/dbFunctions.js. You can use them like this:

```js
import { findById } from '../db

const postalCode_id = '5b5f6f51222be42bb919280e'

const postalData = await findById('postalCode', postalCode_id )
```

The signature is

```js
const findById = async (collection, id, project = {})
```

If you want to use a projection:

```js
const postalData = await findById(
  'postalCodes',
  postalCode_id,
  { cityName: 1, postalCode: 1, stateCode: 1, _id: 0 }
)
```
Which would return the fields with '1' and not the fields with '0'.

## Return Values
All methods which return documents have the return format of
```js
{ data: [], meta: {}}
```
Currently the meta field is not used
__The only method that does not return the above format is <code>dropCollection()</code> which returns true or an error.

## Here is a list of all current dbFunctions
```js
const dropCollection = async (collection)

const find = async (collection, query, project = {})

const findById = async (collection, id, project = {})

const findOneAndDelete = async (collection, id)

const findOneAndUpdate = async ( collection, id, filter, returnOriginal = false )

const insertOne = async (collection, data)

const insertMany = async (collection, data)
```

### More to come!

## Notes

1. Parameters largely follow MongoDB conventions
    - **collection** is a string, e.g., 'events'
    - **data** is an object
      ```js
      { firstName: 'joe', lastName: 'rice' }
      ```
    - **project** is an object
      ```js
      { cityName: 1, postalCode: 1, stateCode: 1, _id: 0 }
      ```
    - **query** is an object
      ```js
      { cityName: 1, postalCode: 1, stateCode: 1, _id: 0 }
      ```
    - **returnOriginal** is a boolean.
      - true - returns the original document
      - false - returns the updated document
2. To query by **_id** you must use <code>findById()</code>
3. All other queries should use <code>find()</code> with the query format being identical to any other MongoDB query
4. **_id** values can be sent as a string (e.g., '5b5f6f51222be42bb919280e') or ObjectId
5. Validity of _id will be checked for you
6. You likely want to async/await all functions