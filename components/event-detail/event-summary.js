import styled from "styled-components";

function EventSummary(props) {
  const { title } = props;

  return (
    <Wrapper>
      <section className="summary">
        <h1>{title}</h1>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .summary {
    width: 100%;
    height: 40vh;
    background-image: linear-gradient(to bottom left, #008b79, #1180a1);
  }

  .summary h1 {
    margin: 0;
    padding-top: 3rem;
    font-size: 2rem;
    text-align: center;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    color: white;
  }

  @media (min-width: 768px) {
    .summary h1 {
      font-size: 5rem;
    }
  }
`;

export default EventSummary;
