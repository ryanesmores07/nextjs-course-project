import styled from "styled-components";

function EventContent(props) {
  return (
    <Wrapper>
      <section className="content">{props.children}</section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .content {
    font-size: 1.5rem;
    color: #3a3a3a;
    width: 90%;
    max-width: 40em;
    margin: auto;
    margin-top: 8rem;
    text-align: center;
  }
`;

export default EventContent;
