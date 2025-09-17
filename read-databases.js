const { collection } = require('./mongo_db');
const {sql} = require('./supa_db');
(async () => {
  try {
    // Query to select all rows from your collection, e.g. 'users'
    const mongoData = await collection.find({}).toArray();
    console.log('MongoDB Data:', mongoData);
  } catch (error) {
    console.error('Error reading data:', error)
  }
  try {
    // Query to select all rows from your table, e.g. 'users'
    const users = await sql`SELECT * FROM users;`
    console.log('Users:', users)
  } catch (error) {
    console.error('Error reading data:', error)
  }
  await client.close();
})();
