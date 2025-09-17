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
    const symbol = 'AAPL';

    // Query a specific holding by symbol
    const rows = await supa.query`
      SELECT * FROM holdings
      WHERE symbol = ${symbol}
      LIMIT 1
    `;

    const holding = rows.length > 0 ? rows[0] : null;
    console.log(`Holding for ${symbol}:`, holding);

  } catch (error) {
    console.error('Supabase Error:', error);
  } finally {
    await client.close();   // close Mongo
    await supa.close();     // close Postgres
  }
})();
