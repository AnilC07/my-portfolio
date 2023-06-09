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

  return result;
};

export const saveUserInfos = async (client, collection, datas) => {
  const { name, email, compagny } = datas;

  const db = client.db();

  const existingUser = await db.collection(collection).findOne({ email });

  if (existingUser !== null) {
    return;
  }

  const result = await insertDoc(client, "visiteur", {
    name,
    email,
    compagny,
  });
};

// PROJETS

export async function getAllProjets() {
  const client = await connectToDB();
  const db = client.db();

  let projects = await db
    .collection("projet")
    .find()
    .project({ _id: 0 })
    .toArray();

  return projects;
}

export async function getProjectById(projectID) {
  const client = await connectToDB();

  const db = client.db();

  const theProject = await db
    .collection("projet")
    .find({ id: projectID })
    .project({ _id: 0 })
    .toArray();

  return theProject;
}
