const { MongoClient } = require('mongodb')

module.exports = {
  getDb: async () => {
    const client = await MongoClient.connect(process.env.DATABASE_URL)
    return client.db()
  }
}