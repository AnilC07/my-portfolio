import { MongoClient } from "mongodb";

const connectToDB = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.u3vdkvu.mongodb.net/${process.env.MONGODB_DATABASE_NAME}`
  );
  console.log("connectToDB " + client);

  return client;
};

export default connectToDB;
