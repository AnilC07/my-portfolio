import { checkExistingUser, connectToDB, insertDoc } from "@/lib/db-util";

const storeUserData = async (req, res) => {
  const { name, email, compagny } = req.body;

  let client;
  try {
    client = await connectToDB();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "Connection à la DB échouée" });
    return;
  }

  const db = client.db()

  const existingUser = await db.collection('visiteur').findOne({email:email})



  if (existingUser !== null) {
    res.status(422).json({
      status: "failed",
      message: "User already registered",
    });
    client.close()
    return
  }

    try {
      const result = await insertDoc(client, "visiteur", {
        name,
        email,
        compagny,
      });
    } catch (error) {
      client.close();
      res.status(500).json({ message: error.message });
    }
  
  // client.close();

  res.status(201).json({
    status: "success",
    message: "Les informations ont bien été enrengistrer",
  });
};

export default storeUserData;
