import Button from "../ui/button";

import styled from "styled-components";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <Wrapper>
      <section className="title">
        <h1>Events in {humanReadableDate}</h1>
        <Button link="/events">Show all events</Button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .title {
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;
    text-align: center;
  }
`;

export default ResultsTitle;
