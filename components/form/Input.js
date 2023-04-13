import { forwardRef } from "react";

import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>
        {props.label}
        {props.require === "true" && <span className="asterix">*</span>}{" "}
      </label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        require={props.require}
      />
    </div>
  );
});

export default Input;
