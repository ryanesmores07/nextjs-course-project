import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import {
  EventContent,
  EventLogistics,
  EventSummary,
  LogisticsItem,
} from "../../components/event-detail";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
