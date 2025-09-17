const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI)
async function connectMongo() {
  await client.connect()
  return client.db('smart-cover-letter').collection('users')
}

module.exports = { connectMongo, client }
