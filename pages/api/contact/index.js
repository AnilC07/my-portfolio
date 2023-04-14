import { connectToDB, saveUserInfos } from "@/lib/db-util";
import nodemailer from "nodemailer";

async function emailHandler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { name, email, message, compagny, subject } = req.body;
  console.log(req.body);

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
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      port: 465,
      service: "gmail",
      host: "smtp.gmail.com",
      secure: false,
      auth: {
        user: "contact.anil.dev@gmail.com",
        pass: process.env.PASSWORD,
      },
    });
  } catch (error) {
    console.log(error.message);
    return;
  }

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages " + success);
    }
  });

  try {
    transporter.sendMail(
      {
        from: email,
        to: "contact.anil.dev@gmail.com",
        subject: subject,
        text: `${name} <${email}> de la societe ${compagny} à envoyer le message suivant:\n\n${message}`,
      },
      (error, info) => {
        if (error) {
          console.log("error is " + error);
          resolve(false); // or use rejcet(false) but then you will have to handle errors
        } else {
          console.log("Email sent: " + info.response);
          resolve(true);
        }
      }
    );
    res.status(200).json({message: "success"});
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({
        message:
          "Une erreur est apparue lors de l'envoie de votre message. Veuillez reessayer!",
      });
    return;
  }

  // 2 SI ENVOIE DU MAIL OK => ENRENGISTRE LES INFOS DE L'UTILISATEUR

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
    const result = await saveUserInfos(client, "visiteur", userDatas);
  } catch (error) {
    console.log(error);
    client.close();
    res.status(500).json({ message: error.message });
    return;
  }

  client.close();
}

export default emailHandler;
