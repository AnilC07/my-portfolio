import { MongoClient } from "mongodb";

export const connectToDB = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.u3vdkvu.mongodb.net/${process.env.MONGODB_DATABASE_NAME}`
  );

  return client;
};

export const insertDoc = async (client, collection, datas) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(datas);
  newMessage.id = result.insertedId;

  return result;
};

