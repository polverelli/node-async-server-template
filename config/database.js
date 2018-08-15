import mysql from 'promise-mysql'
import environment from './environment'

let pool

if(environment === 'development') {
  pool = mysql.createPool({
    host: 'locahost',
    user: 'root',
    password: 'root',
    database: 'db',
    port: '3306',
    connectionLimit: 10
  })
} else if(environment === 'production') {
  pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: '',
    port: '3306',
    connectionLimit: 10
  })
}

export { pool }
