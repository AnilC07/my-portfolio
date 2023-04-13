import connectToDB from "@/lib/db/connectToDB";
import nodemailer from "nodemailer";

async function storeMessage(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const { name, email, message, subject } = req.body;

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

  let info;

  try {
    // send mail with defined transport object
    info = transporter.sendMail({
      from: email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: subject, // Subject line
      text: `${name} <${email}> à envoyer le message suivant:\n\n${message}`, // plain text body
    });

    res.status(200).json({
      status: "success",
      data: info,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
}

export default storeMessage;
