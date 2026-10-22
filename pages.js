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
              Text starting with "[" is shown as a placeholder until you replace it.
              A section can also have:
                members     A list of people shown as cards: { name: "Laura Radut", role: "People & Culture Coordinator" },
                buttonText  The words on a button at the end of that section.
                buttonLink  Where that button goes. Leave as "" to hide the button.
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
    eyebrow: "The Committee",
    title: "La Dolce Vita",
    intro: "A team of colleagues from across the hotel, brought together to plan and celebrate the moments that make Bvlgari Hotel London a truly wonderful place to work — from cultural traditions and team events to the little touches that remind us we are part of something special.",
    sections: [
      {
        heading: "Meet the committee",
        text: [],
        members: [
          { name: "Laura Radut", role: "People & Culture Coordinator" },
          { name: "Aris Ciurar", role: "Bvlgari Lounge Manager" },
          { name: "Andras Niemi", role: "Stewarding Manager" },
          { name: "Andrei Prigoreanu", role: "Sette Supervisor" },
          { name: "Olena Lohunova", role: "Spa Attendant" },
          { name: "Richard Burton", role: "Spa Membership Manager" },
          { name: "Yessenia Porras", role: "Reservations Agent" },
          { name: "Anmoljit Nirwan", role: "Finance Assistant" },
          { name: "Artur Bendig", role: "Bellman" },
          { name: "Rohit Patil", role: "Engineering Supervisor" },
          { name: "Julia Gsell", role: "Guest Relations Manager" }
        ]
      },
      {
        heading: "Share an idea",
        text: [
          "La Dolce Vita belongs to everyone. If there is an event, tradition, or moment you would love to see come to life — tell us. Every voice matters."
        ],
        buttonText: "Submit your idea",
        buttonLink: ""
      }
    ],
    photos: [],
    photosTitle: "",
    organiser: "La Dolce Vita",
    buttonText: "",
    buttonLink: "",
    note: "Questions? Find Laura in the People & Culture office."
  },
];
