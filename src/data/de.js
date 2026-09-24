/* ==========================================================================
   Deutsch — der gesamte Text der Website
   --------------------------------------------------------------------------
   Zahlen, Koordinaten und Dateinamen stehen in shared.js. Hier nur Text.
   ========================================================================== */

export default {
  meta: {
    title: "Apartmani Nada · Vrulje, Gornji Karin",
    description:
      "Zwei getrennte Ferienwohnungen in einem Haus am Ufer des Karinsko more, in Vrulje bei Gornji Karin. Ein Geschoss oder das ganze Haus. Direkt bei den Eigentümern buchen.",
  },

  money: { before: "", after: " €" },

  ui: {
    language: "Sprache",
    menu: "Menü",
    close: "Schließen",
    skip: "Zum Inhalt springen",
    openInMaps: "In Karten öffnen",
    previousPhoto: "Vorheriges Foto",
    nextPhoto: "Nächstes Foto",
    plateHint: "Foto folgt",
    chartMarker: "Das Haus",
    perNight: "pro Nacht",
    viewUnit: "Dieses Geschoss ansehen",
    askUnit: "Nach diesem Geschoss fragen",
    backToApartments: "Zurück zu beiden Wohnungen",
  },

  nav: {
    home: "Start",
    apartments: "Die Wohnungen",
    beaches: "Strände",
    hiddenGems: "Versteckte Perlen",
    gallery: "Galerie",
    gettingHere: "Anreise",
    contact: "Kontakt",
  },

  season: "Mai – Oktober",
  languages: ["Kroatisch", "Englisch", "Italienisch", "Deutsch"],

  hero: {
    eyebrow: "44°08′43″N · 15°37′59″E · Karinsko more",
    title: "Wo Süßwasser ins Meer aufsteigt",
    lead: "Vrulje heißen die Süßwasserquellen, die hier vom Meeresboden aufsteigen — nach ihnen ist dieser Küstenstreifen benannt. Das Haus steht wenige Schritte vom Kies entfernt, mit zwei getrennten Wohnungen, eine pro Geschoss. Nehmen Sie eine — oder das ganze Haus.",
    facts: [
      "Zwei Wohnungen",
      "Je 4 Personen",
      "Ganzes Haus bis 8",
      "Zwei Küchen",
    ],
    primaryCta: "Termine anfragen",
    secondaryCta: "Beide Wohnungen ansehen",
  },

  soundings: {
    label: "Entfernungen",
    title: "Von der Haustür aus",
    note: "Mit dem Auto gemessen, außer der ersten — die geht man barfuß.",
    items: [
      { depth: "40 m", label: "Zum Kies und ins Wasser" },
      { depth: "1,2 km", label: "Gornji Karin, Laden und ein Café" },
      { depth: "1,5 km", label: "Franziskanerkloster aus dem 15. Jahrhundert" },
      { depth: "12 km", label: "Obrovac und der Zrmanja-Canyon" },
      { depth: "17 km", label: "Benkovac und die Auffahrt zur A1" },
      { depth: "50 km", label: "Zadar, etwa 45 Minuten mit dem Auto" },
    ],
  },

  intro: {
    label: "Kurz gesagt",
    title: "Ein Haus, zwei Wohnungen, keine Rezeption",
    body: [
      "Das Karinsko more ist eine fast geschlossene Bucht, flach und warm, mit dem Novigradsko more nur durch einen kaum hundert Meter breiten Kanal verbunden. Das Haus steht am Ufer in Vrulje, an einem einen halben Kilometer langen Kiesstrand, an dem selbst im August selten mehr als ein Dutzend Menschen liegen. Darin gibt es zwei Wohnungen, eine pro Geschoss.",
      "Die Geschosse sind vollständig getrennt. Jedes hat seinen eigenen Eingang, seine eigene Küche, ein Wohnzimmer, zwei Schlafzimmer und ein Bad. Geteilt wird nichts außer der Wäscheleine hinter dem Haus. Wenn Sie nur ein Geschoss nehmen, kann das andere belegt sein — Sie kommen und gehen, ohne jemandem zu begegnen.",
      "Wir führen das nicht wie ein Hotel. Tonči bringt Ihnen die Schlüssel an die Tür, zeigt, welche Fensterläden zu schließen sind, wenn der Jugo weht, und lässt Sie ansonsten in Ruhe. Wenn Sie eine Empfehlung wollen, fragen Sie — er hat zu jeder Bucht der Insel eine Meinung.",
    ],
  },

  /* Beschriftungen im Hausplan. Kurz halten — sie stehen in kleinen Feldern. */
  plan: {
    label: "Grundriss",
    title: "Der Grundriss, auf beiden Geschossen gleich",
    note: "Nicht maßstabsgetreu. Auf ein Geschoss klicken für mehr.",
    room1: "Zimmer 1",
    room2: "Zimmer 2",
    kitchen: "Küche",
    living: "Wohnzimmer",
    bathroom: "Bad",
    hallway: "Flur",
    shower: "Dusche",
    terrace: "Große Terrasse",
    stairs: "Treppe nach oben",
    outsideShower: "Außendusche",
  },

  /* One caption per photo in shared.js, keyed by the same id. */
  captions: {
    1: "Obergeschoss — Wohnzimmer",
    2: "Obergeschoss — Wohnzimmer",
    3: "Obergeschoss — Zimmer 1",
    4: "Obergeschoss — Zimmer 2",
    5: "Obergeschoss — Zimmer 2, Schränke",
    6: "Obergeschoss — Bad",
    7: "Obergeschoss — Dusche",
    8: "Die untere Terrasse, vom Innenhof aus",
    9: "Die untere Terrasse, vom Innenhof aus",
    10: "Die untere Terrasse, vom Innenhof aus",
    11: "Erdgeschoss — Wohnzimmer",
    12: "Erdgeschoss — Zimmer 1",
    13: "Erdgeschoss — Zimmer 2",
    14: "Erdgeschoss — Bad",
    15: "Das Haus von der Straße aus",
  },

  home: {
    unitsLabel: "Zwei Geschosse",
    unitsTitle: "Eines nehmen oder beide",
    unitsLead:
      "Auf beiden Geschossen derselbe Standard. Der Unterschied liegt darin, was vor der Tür liegt und wie viele Stufen dorthin führen.",
    glimpseLabel: "Ein Blick",
    glimpseTitle: "Das Haus und was drumherum liegt",
    glimpseLink: "Die ganze Galerie ansehen",
    guestsLabel: "Gäste",
    guestsTitle: "Was Leute hinterher schreiben",
  },

  /* --- Die zwei Wohnungen ------------------------------------------------ */
  /* --- Räume -------------------------------------------------------------
     Beide Wohnungen haben denselben Grundriss, die Raumliste steht deshalb
     nur einmal. Unterschiede kommen in `roomNotes` des Geschosses. ----- */
  rooms: [
    {
      id: "terrace",
      name: "Die große Terrasse",
      body: "Sie zieht sich über die ganze Länge der Wohnung an der Südwestseite entlang. Wohnzimmer und Küche gehen beide auf sie hinaus, im Sommer bleiben die Türen deshalb den ganzen Tag offen. Tisch, Stühle und Platz für Liegen; die Außendusche steht direkt an der Treppe.",
    },
    {
      id: "living",
      name: "Wohnzimmer",
      body: "Der größte Raum der Wohnung, mit Ausgang auf die Terrasse. Ein Sofa, ein Tisch und genug Platz, dass sich vier Leute nicht im Weg stehen.",
    },
    {
      id: "kitchen",
      name: "Küche",
      body: "Ein eigener Raum, keine Kochnische im Wohnzimmer. Herd, Backofen, Kühlschrank, Geschirr und ein eigener Tisch. Von der Terrasse kommt man direkt in die Küche und von dort in den kleinen Flur, der zum Bad und zu den Zimmern führt.",
    },
    {
      id: "room1",
      name: "Zimmer 1",
      body: "Das größere der beiden Zimmer, in der Ecke zur Außenwand, mit eigenem Fenster.",
    },
    {
      id: "room2",
      name: "Zimmer 2",
      body: "Das kleinere Zimmer, neben dem Wohnzimmer.",
    },
    {
      id: "bathroom",
      name: "Bad",
      body: "Zwischen Zimmer 1 und der Küche, mit dem kleinen Flur vor der Tür. Dusche, Waschbecken und WC. Das ist der einzige Raum, in dem sich die beiden Wohnungen unterscheiden.",
    },
  ],

  units: {
    upper: {
      name: "Obere Wohnung",
      short: "Oben",
      tagline: "Das Obergeschoss, über die eigene Außentreppe",
      body: "Derselbe Grundriss wie unten: Küche, Wohnzimmer, zwei Zimmer, Bad und die große Terrasse über die ganze Länge der Wohnung. Man erreicht es über eine eigene Außentreppe, liegt also weiter von der Straße weg und ruhiger, und von der Terrasse blickt man über die Bucht.",
      facts: ["4 Personen", "2 Zimmer", "1 Bad", "68 m²", "Obergeschoss"],
      highlights: [
        "Eigene Außentreppe",
        "Ruhiger, weiter von der Straße",
        "Blick über die Bucht von der Terrasse",
      ],
      /* Was auf diesem Geschoss von der gemeinsamen Raumliste abweicht. */
      roomNotes: {
        bathroom: {
          body: "Dusche, Waschbecken und WC. Das obere Bad greift zusätzlich mit einer kleinen Nische in die Ecke von Zimmer 1, und darin steht die bodengleiche Dusche — ohne Kabine und ohne Schwelle. Das ist der einzige Unterschied zwischen den beiden Wohnungen.",
        },
      },
    },

    lower: {
      name: "Untere Wohnung",
      short: "Unten",
      tagline: "Erdgeschoss, ohne eine einzige Stufe",
      body: "Derselbe Grundriss wie oben: Küche, Wohnzimmer, zwei Zimmer, Bad und die große Terrasse über die ganze Länge der Wohnung. Man tritt ebenerdig von der Straße ein, ohne eine einzige Stufe — einfacher mit Gepäck, mit Kinderwagen oder wenn Treppen schwerfallen. Im Sommer bleibt das Erdgeschoss außerdem kühler.",
      facts: ["4 Personen", "2 Zimmer", "1 Bad", "64 m²", "Erdgeschoss"],
      highlights: [
        "Keine einzige Stufe bis zur Tür",
        "Kühler im August",
        "Der kürzeste Weg zum Wasser und zum Auto",
      ],
      /* Was auf diesem Geschoss von der gemeinsamen Raumliste abweicht. */
      roomNotes: {
        bathroom: {
          body: "Dusche, Waschbecken und WC, alles in einem Raum. Anders als oben gibt es hier keine eigene Nische für die Dusche. Das ist der einzige Unterschied zwischen den beiden Geschossen.",
        },
      },
    },
  },

  house: {
    name: "Das ganze Haus",
    short: "Ganzes Haus",
    tagline: "Beide Geschosse, acht Personen, sonst niemand",
    body: "Nehmen Sie beide Geschosse, gehört das Haus Ihnen allein — beide Terrassen und beide Küchen. Meist sind es zwei Familien, die zusammen reisen, oder eine große: Die Kinder können sich über zwei Geschosse verteilen, und abends sitzen trotzdem alle an einem Tisch.",
    facts: ["8 Personen", "4 Zimmer", "2 Bäder", "2 Küchen", "132 m²"],
    highlights: [
      "Acht Personen, vier Zimmer, zwei Bäder",
      "Zwei Terrassen und zwei Küchen",
      "Günstiger als beide Geschosse einzeln",
    ],
  },

  apartments: {
    label: "Die Wohnungen",
    title: "Zwei Geschosse, zwei Wohnungen",
    lead: "Jedes Geschoss ist eine vollständige Wohnung: Küche, Wohnzimmer, zwei Schlafzimmer und ein Bad. Nehmen Sie, was Ihnen passt — oder beide.",
    chooseLabel: "Geschoss wählen",
    chooseTitle: "Oben oder unten",
    togetherLabel: "Beide zusammen",
    sameLabel: "Gemeinsam",
    sameTitle: "In beiden Wohnungen gleich",
    sameNote:
      "Das unterscheidet sich von Geschoss zu Geschoss nicht — gleiche Ausstattung, gleicher Standard, gleiche Wäsche.",
    ratesLabel: "Preise",
    ratesTitle: "Pro Nacht, ohne Provision",
    seasonCol: "Zeitraum",
    inPrice: "Im Preis enthalten",
    onTop: "Zusätzlich, und wie bezahlt wird",
    rulesLabel: "Hausordnung",
    rulesTitle: "Vier Regeln, und alle sind verhandelbar außer der zweiten",
  },

  unitPage: {
    factsLabel: "Kurz gefasst",
    aboutTitle: "Was dieses Geschoss hat",
    roomsLabel: "Zimmer für Zimmer",
    roomsTitle: "Was wo ist",
    includedLabel: "Inklusive",
    includedTitle: "Ausstattung der Wohnung",
    ratesLabel: "Preise",
    ratesTitle: "Pro Nacht, dieses Geschoss",
    otherLabel: "Das andere Geschoss",
    otherTitle: "Oder sehen Sie sich an",
  },

  amenities: [
    {
      group: "Komfort",
      items: [
        "Klimaanlage in beiden Zimmern",
        "Deckenventilatoren",
        "Insektenschutz an jedem Fenster",
        "Zusätzliche Decken und Kissen",
      ],
    },
    {
      group: "Küche",
      items: [
        "Gaskochfeld und Elektrobackofen",
        "Kühlschrank mit Gefrierfach",
        "Moka-Kanne und Filterkaffee",
        "Vollständiges Set an Töpfen, Messern und Fischtellern",
      ],
    },
    {
      group: "Praktisches",
      items: [
        "Eine Waschmaschine in jeder Wohnung",
        "Bügeleisen und Wäscheständer",
        "Schnelles Glasfaser-WLAN",
        "Strandtücher, Sonnenschirm und Kühlbox",
      ],
    },
    {
      group: "Draußen",
      items: [
        "Ein Tisch für sechs auf jeder Terrasse",
        "Zwei Liegen pro Wohnung",
        "Außendusche an der Treppe",
        "Parkplatz neben dem Haus",
      ],
    },
  ],

  rates: {
    note: "Preise pro Nacht für die ganze Wohnung. Keine Endreinigungsgebühr und keine Buchungsprovision — Sie zahlen an uns, nicht an eine Plattform. Das ganze Haus kostet weniger als beide Geschosse einzeln.",
    rows: {
      early: { period: "1. Mai – 14. Juni", min: "Mindestens 4 Nächte" },
      june: { period: "15. Juni – 10. Juli", min: "Mindestens 5 Nächte" },
      peak: { period: "11. Juli – 25. August", min: "Mindestens 7 Nächte" },
      late: { period: "26. August – 20. September", min: "Mindestens 5 Nächte" },
      autumn: { period: "21. September – 15. Oktober", min: "Mindestens 4 Nächte" },
    },
    included: [
      "Endreinigung und alle Bettwäsche",
      "Wasser, Strom und Gas",
      "WLAN und Klimaanlage",
      "Strandausrüstung: Tücher, Sonnenschirm, Kühlbox",
    ],
    extra: [
      "Kurtaxe: 1,50 € pro Person und Nacht, ab 12 Jahren, bar bei Ankunft",
      "Eine Anzahlung von 30 % bestätigt die Termine; der Rest ist am Anreisetag fällig",
      "Überweisung oder Bargeld — Karten nehmen wir nicht",
    ],
  },

  houseRules: [
    "Anreise ab 15:00, Abreise bis 10:00. Beides ist flexibel, wenn die Wohnung davor oder danach leer ist — fragen Sie einfach.",
    "Ruhe zwischen 22:00 und 08:00. Die Häuser stehen hier eng, die Fenster sind den ganzen Sommer offen, und das andere Geschoss kann belegt sein.",
    "Drinnen wird nicht geraucht. Die Terrasse gehört Ihnen; der Ascher steht auf dem Tisch.",
    "Gut erzogene Hunde sind kostenlos willkommen. Sagen Sie es vorher, dann rollen wir den guten Teppich zusammen.",
  ],

  testimonials: [
    {
      quote: "Wir hatten im August das Erdgeschoss. Frühstück, Mittag- und Abendessen — alles auf der Terrasse, kein einziges Mal drinnen am Tisch.",
      name: "Marta",
      from: "Krakau",
      when: "August",
    },
    {
      quote: "Wir zu acht im ganzen Haus. Die Kinder oben, wir unten, und abends alle an einem Tisch.",
      name: "Daniel & Ute",
      from: "Leipzig",
      when: "September",
    },
  ],

  gallery: {
    label: "Galerie",
    title: "Fünfzehn Tafeln",
    lead: "Beide Wohnungen, Raum für Raum, und das Haus von der Straße aus.",
    groups: {
      upper: "Obere Wohnung",
      lower: "Untere Wohnung",
      house: "Das Haus und drumherum",
    },
    closerTitle: "Fotos zeigen nur so viel",
    closerBody:
      "Wenn Sie etwas sehen möchten, das hier fehlt — die Dusche, den Parkplatz, den Weg hinunter zum Wasser — fragen Sie, wir schicken es.",
  },

  journey: {
    label: "Anreise",
    title: "Anreise",
    lead: "Vrulje liegt an der Straße zwischen Obrovac und Gornji Karin, im Hinterland Norddalmatiens. Es gibt keine Fähre und keine Brücke — man kommt mit dem Auto, und das ist auch der einzig sinnvolle Weg.",
    legsLabel: "Drei Etappen",
    legsTitle: "Von Tür zu Tür",
    practicalLabel: "Praktisches",
    legs: [
      {
        stage: "Mit dem Auto",
        body: "Über die Autobahn A1 bis zur Ausfahrt Benkovac, dann auf der D27 Richtung Obrovac — von der Ausfahrt sind es noch etwa fünfzehn Minuten. Aus Zagreb rund dreieinhalb Stunden, aus Split anderthalb, aus Ljubljana vier.",
      },
      {
        stage: "Mit dem Flugzeug",
        body: "Zadar (ZAD) in Zemunik ist der nächste Flughafen, etwa 40 km und eine halbe Stunde entfernt. Rijeka und Split liegen bei rund zwei Stunden. Mieten Sie am Flughafen ein Auto — öffentlichen Verkehr nach Vrulje gibt es praktisch nicht.",
      },
      {
        stage: "Die letzten fünf Kilometer",
        body: "Von Obrovac folgt die Straße dem Ufer des Karinsko more Richtung Gornji Karin. Vrulje kommt kurz vor dem Ort, auf der rechten Seite. Sagen Sie uns Bescheid, wenn Sie losfahren, dann stehen wir an der Straße — die Abzweigung übersieht man leicht.",
      },
    ],
    car: {
      title: "Brauchen Sie ein Auto?",
      body: "Ja. Das hier ist keine Insel — zum Laden, zu den Restaurants und zu den meisten Stränden muss man fahren. Neben dem Haus gibt es kostenlose Stellplätze für zwei Autos. Der Bus Obrovac–Benkovac fährt einige Male täglich durch Gornji Karin, aber der Fahrplan richtet sich nach der Schule, nicht nach den Gästen.",
    },
    weather: {
      title: "Die Bura und ein flaches Meer",
      body: "Das Karinsko more ist flach — an der tiefsten Stelle elf Meter — und fast vollständig geschlossen. Deshalb erwärmt es sich im Sommer früher und bleibt länger warm als das offene Meer. Die Quellen und Flüsse, die hineinfließen, machen das Wasser zudem weniger salzig als draußen. Die Bura fällt auch im Sommer vom Velebit herab, aber in einer so kleinen Bucht haben die Wellen keinen Raum, sich aufzubauen.",
    },
    closerTitle: "Sagen Sie uns, wann Sie losfahren",
    closerBody:
      "Schreiben Sie uns, wenn Sie Obrovac passiert haben, dann wartet jemand an der Straße. Die Abzweigung nach Vrulje ist nicht ausgeschildert, und jeder verpasst sie mindestens einmal.",
  },

  closer: {
    label: "Verfügbarkeit",
    title: "Nennen Sie uns Ihre Termine und welches Geschoss Sie meinen",
    body: "Wir antworten innerhalb eines Tages, meist am selben Abend. Wenn Sie unsicher sind, schreiben Sie einfach, wie viele Sie sind — wir schlagen dann eines vor.",
    cta: "Termine anfragen",
  },

  contact: {
    label: "Kontakt",
    title: "Termine anfragen",
    lead: "Ivana und Tonči lesen die Mails jeden Abend. Meist antworten wir noch am selben Abend, immer aber innerhalb eines Tages.",
    fields: {
      name: "Ihr Name",
      email: "E-Mail",
      unit: "Woran Sie denken",
      arrive: "Anreise",
      depart: "Abreise",
      guests: "Personen",
      message: "Etwas, das wir wissen sollten",
    },
    unitOptions: {
      upper: "Obere Wohnung",
      lower: "Untere Wohnung",
      house: "Das ganze Haus — beide Geschosse",
      either: "Egal — sagen Sie uns, was frei ist",
    },
    placeholder:
      "Sie reisen mit Hund, kommen spät abends an, brauchen ein Kinderbett — solche Dinge.",
    guestOptions: [
      "1 Person",
      "2 Personen",
      "3 Personen",
      "4 Personen",
      "5 Personen",
      "6 Personen",
      "7 Personen",
      "8 Personen",
    ],
    guestsNote:
      "Ein Geschoss fasst höchstens vier Personen. Darüber hinaus braucht es das ganze Haus.",
    submit: "In der E-Mail-App öffnen",
    errors: {
      name: "Wir brauchen einen Namen für die Antwort.",
      email: "Prüfen Sie die E-Mail-Adresse — dorthin geht die Antwort.",
      arrive: "Wählen Sie ein Anreisedatum.",
      depart: "Wählen Sie ein Abreisedatum.",
      order: "Die Abreise muss nach der Anreise liegen.",
      capacity: "Ein Geschoss fasst vier Personen. Wählen Sie das ganze Haus oder weniger Personen.",
    },
    noteBefore:
      "Das füllt eine E-Mail aus, die Sie selbst abschicken — nichts verlässt Ihr Gerät, bis Sie auf Senden drücken. Hier wird nichts gespeichert.",
    noteAfter:
      "Ihre E-Mail-App sollte jetzt mit der ausgefüllten Anfrage offen sein. Dort auf Senden drücken, dann erreicht sie uns. Falls nichts passiert ist, schreiben Sie direkt an {email}.",
    mail: {
      subject: "Anfrage: {unit}, {arrive} – {depart}, {guests} Personen",
      name: "Name",
      email: "E-Mail",
      unit: "Wohnung",
      arrive: "Anreise",
      depart: "Abreise",
      guests: "Personen",
      noMessage: "(keine Nachricht)",
    },
    aside: {
      email: "E-Mail",
      phone: "Telefon und WhatsApp",
      address: "Adresse",
      languages: "Wir sprechen",
      open: "Geöffnet",
    },
  },

  footer: {
    pages: "Seiten",
    reach: "Erreichen Sie uns",
    open: "Geöffnet",
    registration: "Registrierung",
  },

  /* Pages that exist but are not written yet. */
  soon: {
    text: "Demnächst",
  },

  notFound: {
    label: "Außerhalb der Karte",
    title: "In dieser Tiefe ist nichts",
    lead: "Die gesuchte Seite gibt es nicht. Das Haus gibt es.",
    cta: "Zurück zum Hafen",
  },
}