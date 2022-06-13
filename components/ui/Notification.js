import { useContext } from "react";
import styled from "styled-components";
import { NotificationContext } from "../../store/Notification-context";
// import classes from "./Notification.module.css";
// import NotificationContext from "../../store/notification-context";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = "success";
  }

  if (status === "error") {
    statusClasses = "error";
  }

  if (status === "pending") {
    statusClasses = "pending";
  }

  const activeClasses = `${"notification"} ${statusClasses}`;

  return (
    <Wrapper>
      <div className={activeClasses} onClick={notificationCtx.hideNotification}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .notification {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: #1b1b1b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0.5rem 10%;
    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);
  }

  .notification h2 {
    margin: 0;
    font-size: 1.25rem;
    color: white;
  }

  .pending {
    background-color: #177cbe;
  }

  .success {
    background-color: #10be58;
  }

  .error {
    background-color: #e65035;
  }
`;

export default Notification;
