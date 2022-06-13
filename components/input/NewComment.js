import { useRef, useState } from "react";
import styled from "styled-components";

function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    props.addCommentHandler({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={sendCommentHandler}>
        <div className="row">
          <div className="control">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={nameInputRef} />
          </div>
        </div>
        <div className="control">
          <label htmlFor="comment">Your comment</label>
          <textarea id="comment" rows="5" ref={commentInputRef}></textarea>
        </div>
        {isInvalid && <p>Please enter a valid email address and comment!</p>}
        <button>Submit</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .form {
    margin: 2rem auto;
    width: 100%;
    border-radius: 6px;
    background-color: #03be9f;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }

  .row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .control {
    margin-bottom: 0.5rem;
    flex: 1;
    min-width: 10rem;
  }

  .control label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
    text-align: left;
  }

  .control input,
  .control textarea {
    font: inherit;
    padding: 0.25rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    background-color: #dcfff9;
  }

  .form button {
    background-color: white;
  }
`;

export default NewComment;
