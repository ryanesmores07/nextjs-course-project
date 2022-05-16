import React from "react";
import EventItem from "./EventItem";
import styled from "styled-components";

const EventList = (props) => {
  const { items } = props;
  return (
    <Wrapper>
      <ul className="list">
        {items.map((event) => {
          return (
            <EventItem
              key={event.id}
              id={event.id}
              title={event.title}
              location={event.location}
              date={event.date}
              image={event.image}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .list {
    width: 90%;
    max-width: 40rem;
    margin: 5rem auto;
  }
`;

export default EventList;
