import { connectToDB, saveUserInfos } from "@/lib/db-util";
import nodemailer from "nodemailer";

async function emailHandler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { name, email, message, compagny, subject } = req.body;
  console.log(req.body)

  if (
    !name ||
    name.trim().length === 0 ||
    !email ||
    !email.includes("@") ||
    email.trim().length === 0 ||
    !message ||
    message.trim().length === 0 ||
    !subject ||
    subject.trim().length === 0
  ) {
    res.status(404).json({
      satut: "Erreur de completion",
      message: "Veuillez verifier tous les champs du formulaire!",
    });
  }

  // 1 ENVOIE DU MAIL

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    // send mail with defined transport object
    const info = transporter.sendMail({
      from: email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: subject, // Subject line
      text: `${name} <${email}> de la societe ${compagny} à envoyer le message suivant:\n\n${message}`, // plain text body
    });

  // 2 SI ENVOIE DU MAIL OK => ENRENGISTRE L'UTILISATEUR

  const userDatas = { name, email, compagny };

  let client;

  try {
    client = await connectToDB();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "Connection à la DB échouée" });
    return;
  }

  try {
    const resultOfSaveUser = await saveUserInfos(client, "visiteur", userDatas);
    res.status(201).json({
      status: "success",
      message: "Les informations ont bien été enrengistrer",
    });
  } catch (error) {
    console.log(error);
    client.close();
    res.status(500).json({ message: error.message });
    return;
  }

  client.close();
}

export default emailHandler;
