# Events data


```js
$ mongo
$ use EventsDEv
$ db.events.drop()
```
ctrl+c to exit the mongo shell
```js
$ cd yourDir/events/doc-and-admin/data-collections
$ mongoimport --db EventsDev --collection events --file events-collection.jso
```

