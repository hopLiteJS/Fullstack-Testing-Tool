const { Pool } = require('pg');
const URI = `postgres://dgirbvev:vJc-Q3memwHSVjxG1H1ABfGmK80HWPEL@ziggy.db.elephantsql.com:5432/dgirbvev`;

const pool = new Pool({
  connectionString: URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log("Your query: ", text);
    return pool.query(text, params, callback);
  }
}