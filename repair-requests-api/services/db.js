/*Funzioni per comunicare con il DB MYSQL*/

const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);
  // await connection.execute(sql, params);
  await connection.end();
  if(results.length == 1) return results[0];
  return results;
}

module.exports = {
  query
}