const { MongoClient } = require('mongodb');

(async () => {
  // Connect to MongoDB
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const collection = client.db('your_db').collection('your_collection');
  const mongoData = await collection.find({}).toArray();
  console.log('MongoDB Data:', mongoData);

  // Connect to Supabase
  const supabase = createClient(process.env.SUPABASE_CONNECTION_URL);
  let { data: supaData, error } = await supabase.from('your_table').select('*');
  if (error) throw error;
  console.log('Supabase Data:', supaData);

  await client.close();
})();
