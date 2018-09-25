# Events Project
## Preparing the Dev Database

> Everything is case sensitive!

The easiest way to load data into the project is using MongoDB Compass. If you don't have Compass installed, here is a link: [MongoDB Compass](https://docs.mongodb.com/compass/master/install/)


## Get the collections
Get the collections as JSON files

Clone our [document-and-admin project](https://github.com/trivalleycoders-org/event-doc-and-admin)
The collection data is in /data-collections.

## Start MongoDB
Start MongoDB from the terminal. The Linux command for this is below. If you are using Windows or Mac, consult the Compass documentation.
```js
$ sudo service mongod start
```

## Launch Compass
When you launch Compass the connections settings should be as below. Adjust them as needed and then click CONNECT.

<img src='https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/connect.png?raw=true' width="700" />


## Setting up the database


> You must create a database named 'EventsDev'. However, the screenshots will say EventsDev2 since I already have an EventsDev db.

At the bottom of the left-hand nav, click the + sign
![new database](new-database.png)
<img src='https://github.com/trivalleycoders-org/event-doc-and-admin/blob/master/doc/loading-dev-data/new-db.png?raw=true' />

Fill-in the form as shown and press CREATE DATABASE
![create-db-form](/create-db-form.png)

Click on the new database in the left-hand nav to open it. You screen should look like this
![new-db](/new-db.png)

Click the green CREATE COLLECTION button and fill in the form as shown, then click CREATE COLLECTION
![users-collection](/users-collection.png)

Repeat the above step except this time the collection name is 'postalCodes'

Your screen should now look like this
![users-collection](/users-collection.png)

## Loading data
Click on the events collection
From the top menu, select Collection > Import data
Use the Browse button to find the file /data-collections/events-collection.json
Make sure the JSON button is selected and then click IMPORT
![import-events](/import-events.png)

Repeat the above process for postalCodes using the file /data-collections/postalCodes.json and for users with the file /data-collections/users.json

> The postalCodes file is 41,000+ records and may take a while to import.











