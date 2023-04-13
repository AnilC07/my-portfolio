import Input from "./Input";
import classes from "./Form.module.css";
import Textarea from "./Textarea";

import { useRef } from "react";

function Form(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const compagnyRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  console.log(props);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredCompagny = compagnyRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const enteredMessage = messageRef.current.value;

    const mailData = {
      name: enteredName,
      email: enteredEmail,
      compagny: enteredCompagny,
      subject: enteredSubject,
      message: enteredMessage,
    };

    props.onSubmitFormHandler(mailData);
  };

  if (props.isSent) {
    nameRef.current.value = "";
    emailRef.current.value = "";
    compagnyRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <Input
        ref={nameRef}
        label="Prènom"
        type="name"
        id="name"
        require="true"
      />
      <Input
        ref={emailRef}
        label="Email"
        type="email"
        id="email"
        require="true"
      />
      <Input ref={compagnyRef} label="Entreprise" type="text" id="compagny" />

      <Input
        ref={subjectRef}
        label="Objet de votre message"
        type="text"
        id="subject"
        require="true"
      />

      <Textarea
        ref={messageRef}
        label="Message"
        id="message"
        rows="8"
        require="true"
        placeholder="Veuillez entrer votre message"
      />
      <div className={classes.button}>
        <button>Envoyer</button>
      </div>
    </form>
  );
}

export default Form;
