const { connectMongo, client } = require('./mongo_db');
const supa = require('./supa_db');

(async () => {
  try {
    const collection = await connectMongo();
    const mongoData = await collection.find({}).toArray();
    console.log('MongoDB Data:', mongoData);
  } catch (error) {
    console.error('MongoDB Error:', error);
  }

  try {
    const holdings = await supa.query`SELECT * FROM holdings;`;
    console.log('Supabase Users:', holdings);
  } catch (error) {
    console.error('Supabase Error:', error);
  } finally {
    await client.close();     // close Mongo
    await supa.close();       // close Postgres
  }
})();
