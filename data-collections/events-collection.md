# Event Collection

## Command to create text index
```js
db.events.createIndex( {title: "text", category: "text", tags: "text", venueName: "text", organization: "text", "location.cityName": "text", "location.stateCode": "text"}, {name: "text_idx"});
```
