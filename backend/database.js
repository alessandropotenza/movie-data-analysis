const sql = require("mssql");

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  requestTimeout: 150000,
  pool: {
    max: 500,
    min: 0,
    idleTimeoutMillis: 100000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: false,
  },
};

const poolPromise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then((pool) => {
    console.log("Connected to SQL Server database");
    return pool;
  })
  .catch((err) =>
    console.log("Database failed to connect on config. Error: " + err)
  );

module.exports = {
  poolPromise,
  sql,
};
