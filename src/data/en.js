/* ==========================================================================
   English — all the text on the site
   --------------------------------------------------------------------------
   Numbers, coordinates and file names live in shared.js. Only wording here.
   ========================================================================== */

export default {
  meta: {
    title: "Apartmani Nada · Vrulje, Gornji Karin",
    description:
      "Two separate apartments in a house on the shore of the Karin Sea, at Vrulje near Gornji Karin. Take one floor or the whole house. Booked directly with the owners.",
  },

  money: { before: "€", after: "" },

  ui: {
    language: "Language",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    openInMaps: "Open in maps",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    plateHint: "Photo to come",
    chartMarker: "The house",
    perNight: "per night",
    viewUnit: "See this floor",
    askUnit: "Ask about this floor",
    backToApartments: "Back to both apartments",
  },

  nav: {
    home: "Home",
    apartments: "The apartments",
    beaches: "Beaches",
    hiddenGems: "Hidden gems",
    gallery: "Gallery",
    gettingHere: "Getting here",
    contact: "Contact",
  },

  season: "May – October",
  languages: ["Croatian", "English", "Italian", "German"],

  hero: {
    eyebrow: "44°08′43″N · 15°37′59″E · The Karin Sea",
    title: "Where fresh water rises into the sea",
    lead: "Vrulje are the freshwater springs that rise through the seabed here, and they give this stretch of shore its name. The house stands a few steps from the shingle, with two separate apartments, one on each floor. Take one, or take the whole house.",
    facts: [
      "Two apartments",
      "Each sleeps 4",
      "Whole house sleeps 8",
      "Two kitchens",
    ],
    primaryCta: "Check dates",
    secondaryCta: "See both apartments",
  },

  soundings: {
    label: "Distances",
    title: "From the front door",
    note: "Measured by car, except the first — that one you walk barefoot.",
    items: [
      { depth: "40 m", label: "To the shingle and the water" },
      { depth: "1.2 km", label: "Gornji Karin, the shop and a café" },
      { depth: "1.5 km", label: "The 15th-century Franciscan monastery" },
      { depth: "12 km", label: "Obrovac and the Zrmanja canyon" },
      { depth: "17 km", label: "Benkovac and the A1 motorway exit" },
      { depth: "50 km", label: "Zadar, about 45 minutes by car" },
    ],
  },

  intro: {
    label: "The short version",
    title: "One house, two apartments, no reception desk",
    body: [
      "The Karin Sea is an almost closed bay, shallow and warm, joined to the Novigrad Sea by a channel barely a hundred metres wide. The house is on the shore at Vrulje, on half a kilometre of shingle beach where even in August you rarely see more than a dozen people. There are two apartments in it, one on each floor.",
      "The floors are completely separate. Each has its own entrance, its own kitchen, living room, two bedrooms and bathroom. Nothing is shared except the washing line behind the house. If you take only one floor the other may be occupied — you will come and go without meeting anybody.",
      "We do not run this like a hotel. Tonči meets you at the door with the keys, shows you which shutters to close when the jugo blows, and leaves you alone unless you want a recommendation. If you do, ask — he has opinions about every bay on the island.",
    ],
  },

  /* Labels on the house diagram. Keep them short — they sit in small cells. */
  plan: {
    label: "Layout",
    title: "The layout, the same on both floors",
    note: "Not to scale. Click a floor to see more.",
    room1: "Room 1",
    room2: "Room 2",
    kitchen: "Kitchen",
    living: "Living room",
    bathroom: "Bathroom",
    hallway: "Hallway",
    shower: "Shower",
    terrace: "Big terrace",
    stairs: "Stairs to the upper floor",
    outsideShower: "Outside shower",
  },

  /* One caption per photo in shared.js, keyed by the same id. */
  captions: {
    1: "Upper floor — living room",
    2: "Upper floor — living room",
    3: "Upper floor — room 1",
    4: "Upper floor — room 2",
    5: "Upper floor — room 2, wardrobes",
    6: "Upper floor — bathroom",
    7: "Upper floor — shower",
    8: "The lower terrace, from the courtyard",
    9: "The lower terrace, from the courtyard",
    10: "The lower terrace, from the courtyard",
    11: "Lower floor — living room",
    12: "Lower floor — room 1",
    13: "Lower floor — room 2",
    14: "Lower floor — bathroom",
    15: "The house from the road",
  },

  home: {
    unitsLabel: "Two floors",
    unitsTitle: "Take one, or take both",
    unitsLead:
      "The same standard on both floors. The difference is what is outside the door, and how many steps there are to it.",
    glimpseLabel: "A glimpse",
    glimpseTitle: "The house and what is around it",
    glimpseLink: "See the whole gallery",
    guestsLabel: "Guests",
    guestsTitle: "What people write afterwards",
  },

  /* --- The two apartments ------------------------------------------------ */
  /* --- Rooms ------------------------------------------------------------
     Both apartments have the same layout, so the room list is written once
     and shared. Differences go in each floor's `roomNotes`, below. ----- */
  rooms: [
    {
      id: "terrace",
      name: "The big terrace",
      body: "It runs the full length of the apartment along the south-west side. Both the living room and the kitchen open onto it, so in summer the doors stay open all day. Table, chairs and room for loungers; the outside shower is right by the stairs.",
    },
    {
      id: "living",
      name: "Living room",
      body: "The largest room in the apartment, opening onto the terrace. A sofa, a table, and enough space for four people not to be in each other's way.",
    },
    {
      id: "kitchen",
      name: "Kitchen",
      body: "A separate room, not a corner of the living room. Hob, oven, fridge, pans, and a table of its own. You come in off the terrace straight into the kitchen, and from there into the small hallway that leads to the bathroom and the rooms.",
    },
    {
      id: "room1",
      name: "Room 1",
      body: "The larger of the two rooms, in the corner against the outside wall, with its own window.",
    },
    {
      id: "room2",
      name: "Room 2",
      body: "The smaller room, next to the living room.",
    },
    {
      id: "bathroom",
      name: "Bathroom",
      body: "Between room 1 and the kitchen, with the small hallway outside its door. Shower, basin and WC. This is the one room where the two apartments differ.",
    },
  ],

  units: {
    upper: {
      name: "Upper apartment",
      short: "Upper",
      tagline: "The upper floor, up its own outside staircase",
      body: "The same layout as downstairs: kitchen, living room, two rooms, bathroom, and the big terrace running the full length of the apartment. You reach it by its own outside staircase, so it sits further back from the road and is quieter, and from the terrace you look out across the bay.",
      facts: ["Sleeps 4", "2 rooms", "1 bathroom", "68 m²", "Upper floor"],
      highlights: [
        "Its own outside staircase",
        "Quieter, further from the road",
        "A view across the bay from the terrace",
      ],
      /* What differs on this floor from the shared room list. */
      roomNotes: {
        bathroom: {
          body: "Shower, basin and WC. The upper bathroom also takes a small alcove out of the corner of room 1, and the walk-in shower is in there — no cubicle, no lip to step over. That is the one difference between the two apartments.",
        },
      },
    },

    lower: {
      name: "Lower apartment",
      short: "Lower",
      tagline: "Ground floor, without a single step",
      body: "The same layout as upstairs: kitchen, living room, two rooms, bathroom, and the big terrace running the full length of the apartment. You walk in straight from road level with no steps at all — easier with luggage, with a pushchair, or if stairs are hard work. The ground floor also stays cooler in summer.",
      facts: ["Sleeps 4", "2 rooms", "1 bathroom", "64 m²", "Ground floor"],
      highlights: [
        "Not a single step to the door",
        "Cooler in August",
        "The shortest walk to the water and to the car",
      ],
      /* What differs on this floor from the shared room list. */
      roomNotes: {
        bathroom: {
          body: "Shower, basin and WC, all in the one room. Unlike upstairs there is no separate alcove for the shower. That is the one difference between the two floors.",
        },
      },
    },
  },

  house: {
    name: "The whole house",
    short: "Whole house",
    tagline: "Both floors, eight people, nobody else",
    body: "Take both floors and the house is yours alone — both terraces and both kitchens. It is usually two families travelling together, or one large one, because the children can scatter across two floors while the adults still sit at one table.",
    facts: ["Sleeps 8", "4 rooms", "2 bathrooms", "2 kitchens", "132 m²"],
    highlights: [
      "Eight people, four rooms, two bathrooms",
      "Two terraces and two kitchens",
      "Cheaper than the two floors booked separately",
    ],
  },

  apartments: {
    label: "The apartments",
    title: "Two floors, two apartments",
    lead: "Each floor is a complete apartment: kitchen, living room, two bedrooms and a bathroom. Take whichever suits you, or take both.",
    chooseLabel: "Choose a floor",
    chooseTitle: "Upper or lower",
    togetherLabel: "Both together",
    sameLabel: "Shared",
    sameTitle: "The same in both apartments",
    sameNote:
      "None of this differs from floor to floor — same equipment, same standard, same linen.",
    ratesLabel: "Rates",
    ratesTitle: "Per night, no commission",
    seasonCol: "Period",
    inPrice: "In the price",
    onTop: "On top, and how to pay",
    rulesLabel: "House rules",
    rulesTitle: "Four of them, and they are all negotiable except the second",
  },

  unitPage: {
    factsLabel: "In short",
    aboutTitle: "What this floor has",
    roomsLabel: "Room by room",
    roomsTitle: "What is where",
    includedLabel: "Included",
    includedTitle: "Equipment in the apartment",
    ratesLabel: "Rates",
    ratesTitle: "Per night, this floor",
    otherLabel: "The other floor",
    otherTitle: "Or have a look at",
  },

  amenities: [
    {
      group: "Comfort",
      items: [
        "Air conditioning in both rooms",
        "Ceiling fans",
        "Mosquito screens on every window",
        "Extra blankets and pillows",
      ],
    },
    {
      group: "Kitchen",
      items: [
        "Gas hob and electric oven",
        "Fridge with freezer",
        "Moka pot and filter coffee",
        "Full set of pans, knives, and fish plates",
      ],
    },
    {
      group: "Practical",
      items: [
        "A washing machine in each apartment",
        "Iron and drying rack",
        "Fast fibre wi-fi",
        "Beach towels, umbrella, and a cool box",
      ],
    },
    {
      group: "Outside",
      items: [
        "A table for six on each terrace",
        "Two loungers per apartment",
        "Outside shower by the stairs",
        "Parking beside the house",
      ],
    },
  ],

  rates: {
    note: "Prices are per night for the whole apartment. There is no cleaning fee and no booking commission — you are paying us, not a platform. The whole house costs less than the two floors booked separately.",
    rows: {
      early: { period: "1 May – 14 June", min: "Minimum 4 nights" },
      june: { period: "15 June – 10 July", min: "Minimum 5 nights" },
      peak: { period: "11 July – 25 August", min: "Minimum 7 nights" },
      late: { period: "26 August – 20 September", min: "Minimum 5 nights" },
      autumn: { period: "21 September – 15 October", min: "Minimum 4 nights" },
    },
    included: [
      "Final cleaning and all linen",
      "Water, electricity, and gas",
      "Wi-fi and air conditioning",
      "Beach kit: towels, umbrella, cool box",
    ],
    extra: [
      "Tourist tax: €1.50 per person per night, ages 12 and over, paid in cash on arrival",
      "A deposit of 30% confirms the dates; the balance is due on the day you arrive",
      "Bank transfer or cash — we do not take cards",
    ],
  },

  houseRules: [
    "Arrive after 15:00, leave by 10:00. Both are flexible if the apartment is empty either side — just ask.",
    "Quiet between 22:00 and 08:00. The houses here are close together, the windows are open all summer, and the other floor may be occupied.",
    "No smoking indoors. The terrace is yours; there is an ashtray on the table.",
    "Well-behaved dogs are welcome at no charge. Tell us in advance so we roll up the good rug.",
  ],

  testimonials: [
    {
      quote: "We took the lower floor in August. Breakfast, lunch and dinner — all of it on the terrace, never once at the table indoors.",
      name: "Marta",
      from: "Kraków",
      when: "August",
    },
    {
      quote: "Eight of us in the whole house. Children upstairs, us downstairs, everyone at the same table in the evening.",
      name: "Daniel & Ute",
      from: "Leipzig",
      when: "September",
    },
  ],

  gallery: {
    label: "Gallery",
    title: "Fifteen plates",
    lead: "Both apartments, room by room, and the house from the road.",
    groups: {
      upper: "Upper apartment",
      lower: "Lower apartment",
      house: "The house and around it",
    },
    closerTitle: "Photographs only go so far",
    closerBody:
      "If there is something you want to see that is not here — the shower, the parking spot, the walk down to the water — ask and we will send it.",
  },

  journey: {
    label: "Getting here",
    title: "Getting here",
    lead: "Vrulje sits on the road between Obrovac and Gornji Karin, in the hinterland of northern Dalmatia. There is no ferry and no bridge — you come by car, and that is the only sensible way.",
    legsLabel: "Three legs",
    legsTitle: "Door to door",
    practicalLabel: "Practical",
    legs: [
      {
        stage: "Driving",
        body: "Take the A1 motorway to the Benkovac exit, then the D27 towards Obrovac — about fifteen minutes from the exit. Roughly three and a half hours from Zagreb, an hour and a half from Split, four from Ljubljana.",
      },
      {
        stage: "Flying",
        body: "Zadar (ZAD) at Zemunik is the nearest airport, about 40 km and half an hour away. Rijeka and Split are around two hours. Hire a car at the airport — there is effectively no public transport to Vrulje.",
      },
      {
        stage: "The last five kilometres",
        body: "From Obrovac the road follows the shore of the Karin Sea towards Gornji Karin. Vrulje comes just before the village, on the right. Tell us when you set off and we will come out to the road — the turning is easy to miss.",
      },
    ],
    car: {
      title: "Do you need a car?",
      body: "Yes. This is not an island — the shop, the restaurants and most of the beaches all need driving to. There is free parking beside the house for two cars. The Obrovac–Benkovac bus passes through Gornji Karin a few times a day, but the timetable is built around the school, not around guests.",
    },
    weather: {
      title: "The bura, and a shallow sea",
      body: "The Karin Sea is shallow — eleven metres at its deepest — and almost entirely enclosed, so it warms up earlier in the summer and stays warm longer than the open sea. The springs and rivers feeding it also make the water less salty than outside. The bura can come down off Velebit even in summer, but in a bay this small the waves have nowhere to build.",
    },
    closerTitle: "Tell us when you set off",
    closerBody:
      "Message us when you pass Obrovac and someone will be waiting out on the road. The turning for Vrulje is unmarked, and everybody misses it at least once.",
  },

  closer: {
    label: "Availability",
    title: "Tell us your dates and which floor you have in mind",
    body: "We answer within a day, usually the same evening. If you are not sure which floor, just say how many of you there are and we will suggest one.",
    cta: "Ask about dates",
  },

  contact: {
    label: "Contact",
    title: "Ask about dates",
    lead: "Ivana and Tonči read the email every evening. We usually reply the same night, and always within a day.",
    fields: {
      name: "Your name",
      email: "Email",
      unit: "What you have in mind",
      arrive: "Arriving",
      depart: "Leaving",
      guests: "Guests",
      message: "Anything we should know",
    },
    unitOptions: {
      upper: "Upper apartment",
      lower: "Lower apartment",
      house: "The whole house — both floors",
      either: "Either — tell us what is free",
    },
    placeholder:
      "Travelling with a dog, arriving late in the evening, need a cot — that sort of thing.",
    guestOptions: [
      "1 guest",
      "2 guests",
      "3 guests",
      "4 guests",
      "5 guests",
      "6 guests",
      "7 guests",
      "8 guests",
    ],
    guestsNote:
      "One floor sleeps four at most. More than that needs the whole house.",
    submit: "Open this in your email app",
    errors: {
      name: "We need a name to reply to.",
      email: "Check the email address — the reply goes here.",
      arrive: "Pick an arrival date.",
      depart: "Pick a departure date.",
      order: "Departure needs to be after arrival.",
      capacity: "One floor sleeps four. Choose the whole house, or fewer guests.",
    },
    noteBefore:
      "This fills in an email for you to send yourself, so nothing leaves your device until you press send. Nothing is stored here.",
    noteAfter:
      "Your email app should now be open with the enquiry filled in. Press send there and it reaches us. If nothing happened, write to {email} directly.",
    mail: {
      subject: "Enquiry: {unit}, {arrive} to {depart}, {guests} guests",
      name: "Name",
      email: "Email",
      unit: "Apartment",
      arrive: "Arriving",
      depart: "Leaving",
      guests: "Guests",
      noMessage: "(no message)",
    },
    aside: {
      email: "Email",
      phone: "Phone and WhatsApp",
      address: "Address",
      languages: "We speak",
      open: "Open",
    },
  },

  footer: {
    pages: "Pages",
    reach: "Reach us",
    open: "Open",
    registration: "Registration",
  },

  /* Pages that exist but are not written yet. */
  soon: {
    text: "Coming soon",
  },

  notFound: {
    label: "Off the chart",
    title: "There is nothing at this depth",
    lead: "The page you asked for does not exist. The house does.",
    cta: "Back to the harbour",
  },
}