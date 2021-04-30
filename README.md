# orm-liteplus
![version](https://img.shields.io/badge/version-1.0-brightgreen) ![env](https://img.shields.io/badge/env-nodejs-yellow)

orm for sqlite3 in node.js

## introduction
this is a simple orm for nodejs applications, which consists of updating, deleting, inserting and searching data. The project uses SQLITE3 as a parent dependency

## first step

first install orm into your project with npm

```bash
~# npm install orm-liteplus --save
```

then, import the library into your project.

```js
const orm = require('orm-liteplus')
var db = new orm('./test.db'); //you can use :memory: too
```

>- NOTE: after importing, start a builder to define which database to use. Currently, all sqlite formats are supported. learn more at [sqlite3](https://www.sqlitetutorial.net/sqlite-nodejs/)

## create (optional)

if you have not yet created your database, you can create it using the create method and passing an array containing an object with information from the database tables to be created.

```js
db.create([
    {
        type: 'table',
        name: 'test',
        coluns: {
            id: 'INTEGER PRIMARY KEY',
            name: 'TEXT NOT NULL',
            email: 'TEXT NULL',
            stamp: 'TEXT NULL'
        }
    },
    {
        type: 'table',
        name: 'users',
        coluns: {
            id: 'INTEGER PRIMARY KEY',
            name: 'TEXT NOT NULL',
            email: 'TEXT NULL',
            stamp: 'TEXT NULL',
            active: 'TEXT NULL'
        }
    }
]).then(rest => {
    console.log(rest)
}).catch(e => {
    console.log(e)
})
```
- ``type``: is the type of execution to be called
- ``name``: is the name of the table to be created
- ``coluns``: are the columns to be created within the table

## insert

to insert data in your database, you need to define the parameters that your database will receive through a json.

```js
db.insert([
    {
        "table": "test",
        "values": [
            {
                "name": "victor",
                "email": "victor.ratts@email.com",
                "stamp": new Date().toUTCString()
            }
        ]
    },
    {
        "table": "users",
        "values": [
            {
                "name": "victor",
                "email": "victor.ratts@email.com",
                "stamp": new Date().toUTCString(),
                "active": 0
            }
        ]
    }
]).then(rest => {
    console.log(rest)
}).catch(e => {console.log(e)})
```

## select

the data selection uses a parameterization object to execute the desired query.

```js
db.select({
    colun: '*',
    table: 'test',
    //where: 'WHERE id = 2' /* you can define where condition */
}).then(rest => {
    console.log(rest)
}).catch(e => {
    console.log(e)
})
```
## update

you can update data in masa or in a specific way using the update parameter next to an object containing information about the table to be updated.

```js
db.update([
    {
        "table": "test",
        "where": "WHERE id = 1",
        "set": [
            {
                "name": "joao",
                "email": "joao123@gmail.com"
            }
        ]
    }
])
```

## delete

to delete the inserted data, just use the delete parameter and pass an object containing information about the table and the data you want to delete.
```js
db.delete([
    {
        "table": "test",
        "where": "WHERE id = 1",
    }
])
```
