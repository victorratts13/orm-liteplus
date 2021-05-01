const sqlite = require('sqlite3');


class continuous {
    constructor(database){
        this.db = new sqlite.Database(database);
    }

    create(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                if(arr.type == 'table'){
                    var nr = '';
                    for(var key of Object.keys(arr.coluns)){
                        nr += `${key} ${arr.coluns[key]}, `
                    }
                    var query = `CREATE TABLE ${arr.name} (${nr.substr(0, nr.length - 2)});`
                    db.all(query, (err, rows) => {
                        if(err)
                            return reject({status: 'err', info: err, rows: []})
                        else
                            return resolve({status: 'success', info: `create ${any.length} tables`, rows: rows})
                    })
                }
            }
        })
    }

    insert(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                var nr = '', sr = '';
                for(var val of arr.values){
                    var keys = Object.keys(val)
                    for(var key of keys){
                        nr += `${key}, `
                        sr += `'${val[key]}', `
                    }
                }
                var query = `INSERT INTO ${arr.table} (${nr.substr(0, nr.length -2 )}) VALUES (${sr.substr(0, sr.length -2 )})`
                db.all(query, (err, rows) => {
                    if(err)
                        return reject({status: 'err', info: err, rows: []})
                    else
                        return resolve({status: 'success', info: `inserted ${any.length} rows`, rows: rows})
                })
            }
        })
    }

    select(any = {}){
        var db = this.db;
        return new Promise((resolve, reject) => {
            var query = `SELECT ${any.colun} FROM ${any.table} ${(any.where !== undefined ? any.where : '')}`
            db.all(query, (err, rows) => {
                if(err)
                    return reject({status: 'err', info: err, rows: []})
                else
                    return resolve({status: 'success', info: 'query success', rows: rows})
            })
        })
    }

    update(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                var nr = '', sr = '';
                for(var val of arr.set){
                    var keys = Object.keys(val)
                    for(var key of keys){
                        nr += `${key} = '${val[key]}', `
                    }
                }
                var query = `UPDATE ${arr.table} SET ${nr.substr(0, nr.length - 2)} ${arr.where !== undefined ? arr.where : ''}`
                db.all(query, (err, rows) => {
                    if(err)
                        return reject({status: 'err', info: err, rows: []})
                    else
                        return resolve({status: 'success', info: 'query update success', rows: rows})
                })
            }
        })
    }

    delete(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                var query = `DELETE FROM ${arr.table} ${arr.where !== undefined ? arr.where : ''}`
                db.all(query, (err, rows) => {
                    if(err)
                        return reject({status: 'err', info: err, rows: []})
                    else
                        return resolve({status: 'success', info: 'query deleted success', rows: rows})
                })
            }
        })
    }
}

class sql {
    constructor(database){
        this.db = new sqlite.Database(database);
    }

    create(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                if(arr.type == 'table'){
                    var nr = '';
                    for(var key of Object.keys(arr.coluns)){
                        nr += `${key} ${arr.coluns[key]}, `
                    }
                    var query = `CREATE TABLE ${arr.name} (${nr.substr(0, nr.length - 2)});`
                    db.all(query, (err, rows) => {
                        if(err)
                            return reject({status: 'err', info: err, rows: []})
                        else
                            return resolve({status: 'success', info: `create ${any.length} tables`, rows: rows})
                    })
                }
            }
        }).finally(() => { db.close() })
    }

    insert(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                var nr = '', sr = '';
                for(var val of arr.values){
                    var keys = Object.keys(val)
                    for(var key of keys){
                        nr += `${key}, `
                        sr += `'${val[key]}', `
                    }
                }
                var query = `INSERT INTO ${arr.table} (${nr.substr(0, nr.length -2 )}) VALUES (${sr.substr(0, sr.length -2 )})`
                db.all(query, (err, rows) => {
                    if(err)
                        return reject({status: 'err', info: err, rows: []})
                    else
                        return resolve({status: 'success', info: `inserted ${any.length} rows`, rows: rows})
                })
            }
        }).finally(() => {db.close()})
    }

    select(any = {}){
        var db = this.db;
        return new Promise((resolve, reject) => {
            var query = `SELECT ${any.colun} FROM ${any.table} ${(any.where !== undefined ? any.where : '')}`
            db.all(query, (err, rows) => {
                if(err)
                    return reject({status: 'err', info: err, rows: []})
                else
                    return resolve({status: 'success', info: 'query success', rows: rows})
            })
        }).finally(() => {db.close()})
    }

    update(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                var nr = '', sr = '';
                for(var val of arr.set){
                    var keys = Object.keys(val)
                    for(var key of keys){
                        nr += `${key} = '${val[key]}', `
                    }
                }
                var query = `UPDATE ${arr.table} SET ${nr.substr(0, nr.length - 2)} ${arr.where !== undefined ? arr.where : ''}`
                db.all(query, (err, rows) => {
                    if(err)
                        return reject({status: 'err', info: err, rows: []})
                    else
                        return resolve({status: 'success', info: 'query update success', rows: rows})
                })
            }
        }).finally(() => {db.close()})
    }

    delete(any = []){
        var db = this.db;
        return new Promise((resolve, reject) => {
            for(var arr of any){
                var query = `DELETE FROM ${arr.table} ${arr.where !== undefined ? arr.where : ''}`
                db.all(query, (err, rows) => {
                    if(err)
                        return reject({status: 'err', info: err, rows: []})
                    else
                        return resolve({status: 'success', info: 'query deleted success', rows: rows})
                })
            }
        }).finally(() => {db.close()})
    }
}

module.exports = {sql, continuous};