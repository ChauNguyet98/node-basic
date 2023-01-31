// get the client
import mysql from "mysql2/promise";

// create the connection to database
// const connection = await mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "nodejs_basic",
// });

// create connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejs_basic",
});

export default pool;
