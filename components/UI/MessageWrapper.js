import classes from './MessageWrapper.module.css'

function MessageWrapper({children}){

return <div className={classes.errorWrapper}>{children}</div>
}

export default MessageWrapper