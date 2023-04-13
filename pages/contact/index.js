import { useContext, useState } from "react";

import Head from "next/head";

import classes from "../../styles/Contact.module.css";
import Form from "@/components/form/Form";

import NotificationContext from "@/store/NotificationContext";

const Contact = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const [isSent, setIsSent] = useState(false);

  const submitFormHandler = async (data) => {
    notificationCtx.showNotification({
      status: "pending",
      title: "Envoi du mail en cours",
    });

    try {
      const sendMail = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      notificationCtx.showNotification({
        status: "success",
        title: "Mail envoyé avec succès",
      });
      setIsSent(true);
    } catch (err) {
      notificationCtx.showNotification({
        status: "Erreur",
        title:
          "Une erreur a été détectée dans la validation du formulaire. Merci de réessayer !",
      });
      console.log(err);
    }
  };

  return (
    <>
      <Head lang="en">
        <title>Contact</title>
        <meta
          name="descriptions"
          content="Besoin d'une prestation ou de prendre contact en vue d'une future collaboration ? Merci de bien vouloir remplir le formulaire de contact."
        />
      </Head>
      <div className={classes.titre}>
        <h2>Formulaire de contact</h2>
      </div>
      <Form onSubmitFormHandler={submitFormHandler} isSent={isSent} />
    </>
  );
};

export default Contact;

