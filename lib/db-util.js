
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

export const connectToDB = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.u3vdkvu.mongodb.net/${process.env.MONGODB_DATABASE_NAME}`
  );

  return client;
};

export const insertDoc = async (client, collection, datas) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(datas);
console.log(result)

  return result;
};

export const saveUserInfos = async (client, collection, datas) => {
  const { name, email, compagny } = datas;

  const db = client.db();

  const existingUser = await db.collection(collection).findOne({ email });

  if (existingUser !== null) {
console.log('User already registererd')
    return;
  }

  const result = await insertDoc(client, "visiteur", {
    name,
    email,
    compagny,
  });
};
