import connectToDB from "@/lib/db/connectToDB";

const storeUserData = async (req, res) => {
  const { name, email } = req.body;
  console.log(req.body)
  console.log(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.u3vdkvu.mongodb.net/${process.env.MONGODB_DATABASE_NAME}`)

  let client;
  try {
    client = await connectToDB();
    console.log("storeContact " + client);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: "Connection à la DB échouée" });
    return;
  }

  try {
    const db = client.db();
    console.log(db)

    const result = await db
      .collection("visiteur")
      .insertOne({ name: name, email: email });
    newMessage.id = result.insertedId;
    client.close();
  } catch (error) {
    client.close();
    res.status(500).json({ message: error.message });
  }

  res.status(201).json({
    status: "success",
    message: "Les informations ont bien été enrengistrer",
  });
};

export default storeUserData;
