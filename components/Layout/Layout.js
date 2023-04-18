import { useContext } from "react";
import Header from "./Header";
import NotificationContext from "@/store/NotificationContext";
import Notification from "../UI/Notification";
import Footer from "./Footer";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <>
      <Header />
      <main className={props.montserrat}>{props.children}</main>
      <Footer />
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
