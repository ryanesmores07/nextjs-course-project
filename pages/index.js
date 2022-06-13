import React from "react";
import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/NewsletterRegistration";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>
      <NewsletterRegistration />

      <EventList items={featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return { props: { featuredEvents: featuredEvents }, revalidate: 1800 };
}

export default HomePage;
