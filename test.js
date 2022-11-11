const sql = require("./index.js").sql;

var db = new sql('./test.db');

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

/* db.insert([
    {
        "table": "test",
        "values": [
            {
                "name": "victor",
                "email": "victor.ratts@gmail.com",
                "stamp": new Date().toUTCString()
            }
        ]
    },
    {
        "table": "users",
        "values": [
            {
                "name": "victor",
                "email": "victor.ratts@gmail.com",
                "stamp": new Date().toUTCString(),
                "active": 0
            }
        ]
    }
]).then(rest => {
    console.log(rest)
}).catch(e => {console.log(e)}) */

/* db.select({
    colun: '*',
    table: 'test'
}).then(rest => {
    console.log(rest)
}).catch(e => {
    console.log(e)
}) */

// db.delete([
//     {
//         "table": "test",
//         "where": "WHERE id = 1",
//         "set": [
//             {
//                 "name": "joao",
//                 "email": "joao123@gmail.com"
//             }
//         ]
//     }
// ])