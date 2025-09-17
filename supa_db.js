const postgres = require('postgres');

const connectionString = process.env.SUPABASE_CONNECTION_URL;

// Initialize the client
const sql = postgres(connectionString);

// Export a simple wrapper
module.exports = {
  query: (strings, ...params) => sql(strings, ...params),
  close: async (timeout = 5) => {
    await sql.end({ timeout });
  },
};
