import styled from "styled-components";
import { useRef, useContext } from "react";
import { NotificationContext } from "../../store/Notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(e) {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong",
          status: "error",
        });
      });
  }

  return (
    <Wrapper>
      <section className="newsletter">
        <h2>Sign up to stay updated!</h2>
        <form onSubmit={registrationHandler}>
          <div className="control">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              aria-label="Your email"
              ref={emailInputRef}
            />
            <button>Register</button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .newsletter {
    margin: 3rem auto;
    width: 90%;
    max-width: 20rem;
  }

  .newsletter h2 {
    text-align: center;
  }

  .control input {
    font: inherit;
    padding: 0.25rem;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #ccc;
  }

  .newsletter button {
    background-color: #03be9f;
    border: 1px solid #03be9f;
    border-radius: 6px;
    color: #dafff7;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font: inherit;
    cursor: pointer;
  }

  .newsletter button:hover,
  .newsletter button:active {
    background-color: #02afa1;
    border-color: #02afa1;
  }

  .control {
    display: flex;
  }

  .control input {
    flex: 1;
  }
`;

export default NewsletterRegistration;
