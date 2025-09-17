const postgres = require('postgres');
console.log('Supabase Connection String:', process.env.SUPABASE_CONNECTION_URL ? 'Set' : 'Not Set')
const connectionString = process.env.SUPABASE_CONNECTION_URL
const sql = postgres(connectionString)
module.exports = sql;
