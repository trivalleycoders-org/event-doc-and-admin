
## Cities data

**source:** http://download.geonames.org/export/zip/

**import command example**
__note: you need to add the field names at the top of the file__
```js
 $ mongoimport --db EventsDev --collection cities --type csv --file US.txt --ignoreBlanks --headerline
```

**fields**

- countryCode
- postalCode
- cityName
- stateName
- stateCode
- county
- unknown1
- latitude
- longitude
- accuracy

**example rows**
US	99553	Akutan	Alaska	AK	Aleutians East	13	54.143	-165.7854	1
US	99571	Cold Bay	Alaska	AK	Aleutians East	13	55.1858	-162.7211	1


