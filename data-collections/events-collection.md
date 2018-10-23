# Event Collection

## Command to create text index
```js
$ mongo
> use Events
> db.events.createIndex( {title: "text", category: "text", tags: "text", venueName: "text", organization: "text", cityName: "text", stateCode: "text"});
```
