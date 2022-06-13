export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-project-aef15-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const documents = await db
    .collection(collection)
    .find(filter) // this changed - we use the "filter" parameter!
    .sort(sort)
    .toArray();
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
