const postgres = require('postgres');
const connectionString = process.env.SUPABASE_CONNECTION_URL
const sql = postgres(connectionString)
module.exports = sql;
