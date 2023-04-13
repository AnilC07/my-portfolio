import classes from "./Button.module.css";

function Button(props) {
  return (
    <div className={classes.button}>
      <button>Envoyer</button>
    </div>
  );
}

export default Button;
