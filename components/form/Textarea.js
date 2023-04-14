import { forwardRef } from "react";
import classes from "./Textarea.module.css";

const Textarea = forwardRef((props, ref) => {
  return (
    <div className={classes.textarea}>
      <label htmlFor={props.id}>{props.label}{props.require === true && <span className='asterix'>*</span>}</label>
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        rows={props.rows}
        // required={props.require}
    ref={ref}
      />
    </div>

  );
})

export default Textarea;