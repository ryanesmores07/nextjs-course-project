import React, { useState, useEffect } from "react";
import Head from "next/head";
import EventList from "../../components/events/EventList";
// import { getAllEvents } from "../../dummy-data";
import { getAllEvents } from "../../helpers/api-utils";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

const AllEventsPage = ({ events }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
