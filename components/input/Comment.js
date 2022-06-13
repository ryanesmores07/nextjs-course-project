import { useState, useEffect, useContext } from "react";
import CommentList from "./CommentList";
import NewComment from "./NewComment";
import styled from "styled-components";
import { NotificationContext } from "../../store/Notification-context";

function Comments(props) {
  const notificationCtx = useContext(NotificationContext);

  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch("/api/comments/" + eventId).then((response) => {
        response.json().then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
      });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Posting comment..",
      message: "Your comment is being posted..",
      status: "pending",
    });

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
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
          title: "Success",
          message: "Successfully posted a comment",
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
      <section className="comments">
        <button onClick={toggleCommentsHandler}>
          {showComments ? "Hide" : "Show"} Comments
        </button>
        {showComments && <NewComment addCommentHandler={addCommentHandler} />}
        {showComments && !isFetchingComments && (
          <CommentList items={comments} />
        )}
        {showComments && isFetchingComments && <p>Loading..</p>}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .comments {
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
    text-align: center;
  }

  .comments button {
    font: inherit;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #03be9f;
    border: 1px solid #03be9f;
    cursor: pointer;
  }

  .comments button:hover,
  .comments button:active {
    background-color: #dcfff9;
  }
`;

export default Comments;
