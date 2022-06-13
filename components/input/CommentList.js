import styled from "styled-components";

function CommentList({ items }) {
  return (
    <Wrapper>
      <ul className="comments">
        {items.map((item) => {
          return (
            <li key={item._id}>
              <p>{item.text}</p>
              <div>
                By <address>{item.name}</address>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .comments {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .comments li {
    text-align: left;
    padding: 0.5rem 0;
    border-bottom: 2px solid #ccc;
  }

  .comments p {
    margin: 0;
  }

  .comments li div {
    text-align: right;
    font-style: italic;
  }

  .comments address {
    display: inline;
  }
`;

export default CommentList;
