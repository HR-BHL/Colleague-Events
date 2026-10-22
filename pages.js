/*
  WHAT'S ON: EXTRA PAGES
  ======================
  Pages that aren't events, like "About La Dolce Vita".
  Each page sits between { and }, followed by a comma.

  id          The page's web address ending, e.g. "la-dolce-vita" makes .../#la-dolce-vita
  linkText    The words on the link at the top of the What's On page. Leave as "" to hide the link.
  eyebrow     A small label above the title, e.g. "About us".
  title       The page title.
  intro       One or two sentences shown large under the title.
  sections    The main text. Each section has a heading and paragraphs.
              Start a paragraph with "• " to make it a bullet point.
              Text starting with "[" is shown as a grey placeholder until you replace it.
  photos      Optional. Photos uploaded next to index.html, e.g. ["ldv-01.jpg"]. The first is shown large.
  photosTitle Optional. A heading above the photos.
  organiser   Optional. Events in events.js with this exact organiser are listed on the page automatically.
  buttonText  Optional. An extra button, e.g. "Get in touch".
  buttonLink  Optional. Where that button goes.
*/

const PAGES = [
  {
    id: "la-dolce-vita",
    linkText: "About La Dolce Vita",
    eyebrow: "About us",
    title: "La Dolce Vita",
    intro: "[One or two sentences that sum up La Dolce Vita, for example what the name means to you and why the group exists.]",
    sections: [
      {
        heading: "Who we are",
        text: [
          "[Who La Dolce Vita is: when it started, who is part of it, and who it is for.]"
        ]
      },
      {
        heading: "What we do",
        text: [
          "We organise moments that bring colleagues together across the hotel, like our Midweek Walks.",
          "[Anything else La Dolce Vita runs or looks after, one point per line.]"
        ]
      },
      {
        heading: "Get involved",
        text: [
          "[How colleagues can join in, suggest an idea or get in touch with the team.]"
        ]
      }
    ],
    photos: [],
    photosTitle: "",
    organiser: "La Dolce Vita",
    buttonText: "",
    buttonLink: ""
  },
];
