const { createContext, useState, useEffect } = require("react");

const NotificationContext = createContext({
  notification: null, // {title, messsage, status}
  showNotification: (notificationData) => {},
  hideNotification: () => {},
});

export default NotificationContext;

export const NotificationContextProvider = ({ children }) => {

    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if (
          activeNotification &&
          (activeNotification.status === "success" ||
            activeNotification.status === "error")
        ) {
          const timer = setTimeout(() => {
            setActiveNotification(null);
          }, 3000);
    
          return ()=>{
            clearTimeout(timer)
          }
        }
      }, [activeNotification]);

    const showNotificationHandler = (notificationData) => {
        setActiveNotification(notificationData)
    }

    const hideNotificationHandler = () =>{
        setActiveNotification(null)
    }

    const context = {
        notification:activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }



  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};
