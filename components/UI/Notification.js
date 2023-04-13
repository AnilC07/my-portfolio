import NotificationContext from "@/store/NotificationContext";
import classes from "./Notification.module.css";
import { useContext } from "react";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      {/* <p>{message}</p> */}
    </div>
  );
}

export default Notification;
