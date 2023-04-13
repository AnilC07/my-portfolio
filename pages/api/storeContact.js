const { default: connectToDB } = require("@/lib/db/connectToDB");

const storeUserData = async (req, res) => {
  const { name, email } = req.body;

  let client;
  try {
    client = await connectToDB();
  } catch (error) {
    res.status(500).json({ status: "Connection à la DB échouée" });
    client.close();
    return;
  }

  try {
    const db = await client
      .db()
      .collection("visiteur")
      .insertOne({ name: name, email: email });
    newMessage.id = result.insertedId;
    client.close();
  } catch (error) {
    client.close();
    res.status(500).json({ message: error.message });
  }

  client.close();

  res
    .status(201)
    .json({
      status: "success",
      message: "Les informations ont bien été enrengistrer",
    });
};
