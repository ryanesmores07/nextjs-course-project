import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Notification from "../ui/Notification";
import { NotificationContext } from "../../store/Notification-context";

const Layout = (props) => {
  const {
    showNotification,
    hideNotification,
    notification: activeNotification,
  } = useContext(NotificationContext);

  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
