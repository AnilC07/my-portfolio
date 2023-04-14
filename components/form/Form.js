import Input from "./Input";
import classes from "./Form.module.css";
import Textarea from "./Textarea";
import { AiOutlineExclamationCircle } from "react-icons/ai";


import { useEffect, useRef, useState } from "react";
import MessageWrapper from "../UI/MessageWrapper";

function Form(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const compagnyRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [error, setError] = useState(false)

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

    if (
      !mailData.name ||
      mailData.name.trim().length === 0 ||mailData.name.length === 0 ||
      !mailData.email || mailData.email.length === 0 ||
      !mailData.email.includes("@") ||
      mailData.email.trim().length === 0 ||
      !mailData.message || mailData.message.length === 0 ||
      mailData.message.trim().length === 0 ||
      !mailData.subject || mailData.subject.length === 0 ||
      mailData.subject.trim().length === 0
    ) {
setError(true)
      return
    }

    setError(false)

    props.onSubmitFormHandler(mailData);
  };
useEffect(()=>{
  if (props.isSent) {
    nameRef.current.value = "";
    emailRef.current.value = "";
    compagnyRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  }
},[props.isSent])


  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
    {error && 
       <MessageWrapper><span><AiOutlineExclamationCircle /></span> <p>Une erreur est apparaue lors de la soumission du formulaire. Merci de bien vouloir verifier toute vos saisies.</p></MessageWrapper>}
      <Input
        ref={nameRef}
        label="Prènom"
        type="name"
        id="name"
        placeholder="John Doe"
        require={true}
      />
      <Input
        ref={emailRef}
        label="Email"
        type="email"
        id="email"
        placeholder="johndoe@example.com"
        require={true}
      />
      <Input ref={compagnyRef} label="Entreprise" type="text" id="compagny" />

      <Input
        ref={subjectRef}
        label="Objet de votre message"
        type="text"
        id="subject"
        require={true}
      />

      <Textarea
        ref={messageRef}
        label="Message"
        id="message"
        rows="8"
        require={true}
        placeholder="Veuillez entrer votre message"
      />
      <div className={classes.button}>
        <button>Envoyer</button>
      </div>
    </form>
  );
}

export default Form;
