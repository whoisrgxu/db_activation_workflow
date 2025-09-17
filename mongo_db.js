import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URI)
await client.connect()
const collection = client.db('smart-cover-letter').collection('users')

export { collection, client }
