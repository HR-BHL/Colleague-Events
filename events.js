/*
  WHAT'S ON: EVENT LIST
  =====================
  This is the only file you need to edit to add, change or remove events.

  Each event sits between { and }, followed by a comma.
  To add an event, copy one whole block (from { to },), paste it, and change the details.

  THE CARD
  name       The event title.
  date       The day it happens, written YEAR-MONTH-DAY, e.g. "2026-11-05" for 5 November 2026.
             For a weekly event, this is the first one. The page uses it to sort and filter,
             even when you hide it with dateText below.
  endDate    Optional. For events running over several days, or the last date of a weekly event.
             Leave as "" if it's a single day, or if a weekly event carries on indefinitely.
  dateText   Optional. Shows these words instead of the exact date, e.g. "This week" or "This month".
             Leave as "" to show the real date.
  repeat     Optional. Write "weekly" for an event that happens every week on the same day.
             Leave as "" for a one-off.
  time       Optional. Any text, e.g. "1:00 PM" or "All day". Leave as "" to hide it.
  location   Optional. Any text, e.g. "Loading bay". Leave as "" to hide it.
  organiser  Optional. Who's running it. Leave as "" to hide it.
  teaser     One short sentence for the card.

  WHERE "FIND OUT MORE" GOES
  If the event has details (below), "Find out more" opens its own page on this site.
  If it has no details but has a link, "Find out more" goes straight to that link.
  If it has neither, the card says "More info coming soon".

  link        Optional. The web address of a separate page for the event.
  details     Optional. The text for the event's own page. Each paragraph goes in its own "quote marks",
              separated by commas, all inside [ square brackets ]. Leave as [] for none.
              Start a line with "• " to make it a bullet point.
  highlight   Optional. One sentence shown in a gold frame on the event page, e.g. a special treat or a deadline.
  buttonText  Optional. The words on an extra button on the event page, e.g. "Nominate a colleague".
  buttonLink  Optional. Where that extra button goes.
  photos      Optional. Photos for the event's own page, e.g. ["q3-01.jpg", "q3-02.jpg"].
              Upload the photos to GitHub next to index.html first. The first photo is shown large. Leave as [] for none.
  photosTitle Optional. A heading above the photos, e.g. "Moments from our Q2 celebration".

  Keep the quote marks "like this" around every value.
  You don't need to delete old events: once their date has passed they move to "Past" automatically.
  The order doesn't matter either: the page sorts events by date for you.
*/

const EVENTS = [
  {
    name: "Mental Health Day",
    date: "2026-10-12",
    endDate: "2026-10-18",
    dateText: "This week",
    repeat: "",
    time: "",
    location: "",
    organiser: "",
    teaser: "A moment to pause, check in with yourself and each other, and find out what support is on offer.",
    link: "https://hr-bhl.github.io/World-Mental-Health-Day/",
    details: [],
    highlight: "",
    buttonText: "",
    buttonLink: ""
  },
  {
    name: "Midweek Walk",
    date: "2026-10-21",
    endDate: "",
    dateText: "",
    repeat: "",
    time: "1:00 PM",
    location: "Loading bay",
    organiser: "La Dolce Vita",
    teaser: "A relaxed walk to stretch your legs and catch up with colleagues. Weather permitting.",
    link: "",
    details: [
      "Join us on Wednesday 21 October at 1:00 PM for a relaxed walk with colleagues from across the hotel. We meet in the loading bay and head off together.",
      "Water bottles and protein bars are provided, so just bring yourself and comfortable shoes."
    ],
    highlight: "This walk is weather permitting. If it rains, we'll move it to another day.",
    buttonText: "",
    buttonLink: ""
  },
  {
    name: "Midweek Walk",
    date: "2026-10-28",
    endDate: "",
    dateText: "",
    repeat: "",
    time: "1:00 PM",
    location: "Loading bay",
    organiser: "La Dolce Vita",
    teaser: "A relaxed walk to stretch your legs and catch up with colleagues. Weather permitting.",
    link: "",
    details: [
      "Join us on Wednesday 28 October at 1:00 PM for a relaxed walk with colleagues from across the hotel. We meet in the loading bay and head off together.",
      "Water bottles and protein bars are provided, so just bring yourself and comfortable shoes."
    ],
    highlight: "This walk is weather permitting. If it rains, we'll move it to another day.",
    buttonText: "",
    buttonLink: ""
  },
  {
    name: "Quarterly Celebrations: Q3",
    date: "2026-10-22",
    endDate: "",
    dateText: "",
    repeat: "",
    time: "3:00 PM",
    location: "Screening Room (B2 Level)",
    organiser: "",
    teaser: "Come together to celebrate the achievements of Quarter 3 and vote for our Colleague and Leader of the Quarter.",
    link: "",
    details: [
      "Now that we have successfully completed Quarter 3, it's time to come together for our Quarterly Celebration. This is a wonderful opportunity to connect with colleagues and recognise the fantastic achievements, dedication and hard work demonstrated across the hotel.",
      "It will also be a chance to hear key updates and learn more about our plans and priorities for the quarter ahead.",
      "As part of the celebration, we'd love you to help us recognise outstanding contributions by voting for our Colleague and Leader of the Quarter.",
      "We look forward to celebrating with you and recognising the many successes of the past quarter."
    ],
    highlight: "Nominations close on Friday 16 October at 12:00 PM, so please submit yours before then.",
    buttonText: "Nominate for Colleague and Leader of Q3",
    buttonLink: "https://www.surveymonkey.com/r/NCGGR75",
    photosTitle: "Moments from our Q2 celebration",
    photos: [
      "q3-10.jpg",
      "q3-01.jpg", "q3-04.jpg", "q3-05.jpg",
      "q3-02.jpg", "q3-03.jpg", "q3-06.jpg",
      "q3-07.jpg", "q3-08.jpg", "q3-09.jpg"
    ]
  },
  {
    name: "Halloween Movie Screening",
    date: "2026-10-29",
    endDate: "",
    dateText: "This month",
    repeat: "",
    time: "",
    location: "",
    organiser: "",
    teaser: "Settle in with colleagues for a spooky film night.",
    link: "",
    details: [],
    highlight: "",
    buttonText: "",
    buttonLink: ""
  },
  {
    name: "Christmas Celebrations",
    date: "2026-12-01",
    endDate: "2026-12-31",
    dateText: "Coming soon",
    repeat: "",
    time: "",
    location: "",
    organiser: "La Dolce Vita",
    teaser: "Save the date: our Christmas celebrations are coming this December. Watch this space!",
    link: "",
    details: [],
    highlight: "",
    buttonText: "",
    buttonLink: ""
  },
];
