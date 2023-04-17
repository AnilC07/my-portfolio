import { useContext } from "react";
import Header from "./Header";
import NotificationContext from "@/store/NotificationContext";
import Notification from "../UI/Notification";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <>
      <Header />
      <main className={props.montserrat}>{props.children}</main>
      {activeNotification && (
        <Notification
          status={activeNotification.status}
          title={activeNotification.title}
        />
      )}
    </>
  );
}

export default Layout;
