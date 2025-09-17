const { connectMongo, client }  = require('./mongo_db');
const sql  = require('./supa_db');

(async () => {
  try {
    const collection = await connectMongo()
    const mongoData = await collection.find({}).toArray()
    console.log('MongoDB Data:', mongoData)
  } catch (error) {
    console.error('MongoDB Error:', error)
  }

  try {
    const users = await sql`SELECT * FROM users;`
    console.log('Supabase Users:', holdings)
  } catch (error) {
    console.error('Supabase Error:', error)
  } finally {
    await client.close()
  }
})()
