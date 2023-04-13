import Head from "next/head";

import classes from "../../styles/Contact.module.css";
import Form from "@/components/form/Form";
import Notification from "@/components/UI/Notification";
import { useContext } from "react";
import NotificationContext from "@/store/NotificationContext";

const Contact = (props) => {
  const notificationCtx = useContext(NotificationContext);
  console.log(notificationCtx)

  const submitFormHandler = async (data) => {
    notificationCtx.showNotification({
      status: "pending",
      title: "Envoi du mail en cours",
    });
    console.log(notificationCtx)

    try {
      const sendMail = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const sendMailData = await sendMail.json();
      notificationCtx.showNotification({
        status: "success",
        title: "Mail envoyé avec succèes",
      });

      
    } catch (err) {
      notificationCtx.showNotification({
        status: "error",
        title: "Une erreur à ete detecter dans la validtion du formulaire. Merci de reessayer !",
      });
      console.log(err);
    }

    const { name, email } = data;

    try {
      const userData = await fetch("/api/storeContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const utilisateur = await userData.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head lang="en">
        <title>Contact</title>
        <meta name="descriptions" content="Send me messages" />
      </Head>
      <div className={classes.titre}>
        <h2>Formulaire de contact</h2>
      </div>
      <Form onSubmitFormHandler={submitFormHandler} />
    </>
  );
};

export default Contact;
