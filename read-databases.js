const { MongoClient } = require('mongodb');
const {sql} = require('./supa_db');
(async () => {
  // Connect to MongoDB
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const collection = client.db('smart-cover-letter').collection('users');
  const mongoData = await collection.find({}).toArray();
  console.log('MongoDB Data:', mongoData);

  // Connect to Supabase
  try {
    // Query to select all rows from your table, e.g. 'users'
    const users = await sql`SELECT * FROM users;`
    console.log('Users:', users)
  } catch (error) {
    console.error('Error reading data:', error)
  }
  await client.close();
})();
