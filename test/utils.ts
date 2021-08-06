import { mongo } from '@wetaca/mongo'

export const createMongoClient = (mongoUri: string) => mongo.MongoClient.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

type CollectionData = {
  name: string,
  docs: Array<unknown>
}
type SeedData = Array<CollectionData>

export const seedData = async (mongoUri: string, data: SeedData) => {
  const mongoClient = await createMongoClient(mongoUri)
  const db = mongoClient.db()

  for (const collection of data) {
    if (collection.docs?.length) {
      const dbCollection = db.collection(collection.name)
      await dbCollection.insertMany(collection.docs)
    }
  }

  return mongoClient.close()
}

export const mongoCleanup = async (mongoUri: string) => {
  const mongoClient = await createMongoClient(mongoUri)
  const db = mongoClient.db()

  const collections = await db.listCollections().toArray()

  await Promise.all(
    collections
      .map(({ name }) => name)
      .map((collection) => db.collection(collection).drop())
  )

  return mongoClient.close()
}
