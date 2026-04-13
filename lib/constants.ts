export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Conf 2026",
    slug: "react-conf-2026",
    location: "Las Vegas, NV",
    date: "May 15-16, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    image: "/images/event2.png",
    title: "JSConf EU",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "June 2-4, 2026",
    time: "10:00 AM - 7:00 PM",
  },
  {
    image: "/images/event3.png",
    title: "Google I/O",
    slug: "google-io-2026",
    location: "Mountain View, CA",
    date: "May 20-22, 2026",
    time: "8:00 AM - 5:00 PM",
  },
  {
    image: "/images/event4.png",
    title: "WWDC 2026",
    slug: "wwdc-2026",
    location: "Cupertino, CA",
    date: "June 9-13, 2026",
    time: "10:00 AM - 6:00 PM",
  },
  {
    image: "/images/event5.png",
    title: "PyCon US",
    slug: "pycon-us-2026",
    location: "Pittsburgh, PA",
    date: "May 17-25, 2026",
    time: "9:00 AM - 5:00 PM",
  },
  {
    image: "/images/event6.png",
    title: "DevOpsDays",
    slug: "devopsdays-2026",
    location: "Seattle, WA",
    date: "April 28-29, 2026",
    time: "8:30 AM - 6:00 PM",
  },
];
