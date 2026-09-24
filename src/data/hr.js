/* ==========================================================================
   Hrvatski — sav tekst na stranici
   --------------------------------------------------------------------------
   Brojevi, koordinate i imena datoteka su u shared.js. Ovdje je samo tekst.
   ========================================================================== */

export default {
  meta: {
    title: "Apartmani Nada · Vrulje, Gornji Karin",
    description:
      "Dva odvojena apartmana u kući na obali Karinskog mora, u Vruljama kod Gornjeg Karina. Uzmite jedan kat ili cijelu kuću. Rezervira se direktno kod vlasnika.",
  },

  money: { before: "", after: " €" },

  ui: {
    language: "Jezik",
    menu: "Meni",
    close: "Zatvori",
    skip: "Preskoči na sadržaj",
    openInMaps: "Otvori u kartama",
    previousPhoto: "Prethodna fotografija",
    nextPhoto: "Sljedeća fotografija",
    plateHint: "Fotografija dolazi",
    chartMarker: "Kuća",
    perNight: "po noći",
    viewUnit: "Pogledaj ovaj kat",
    askUnit: "Pitaj za ovaj kat",
    backToApartments: "Natrag na oba apartmana",
  },

  nav: {
    home: "Početna",
    apartments: "Apartmani",
    beaches: "Plaže",
    hiddenGems: "Skriveni dragulji",
    gallery: "Galerija",
    gettingHere: "Kako doći",
    contact: "Kontakt",
  },

  season: "svibanj – listopad",
  languages: ["hrvatski", "engleski", "talijanski", "njemački"],

  hero: {
    eyebrow: "44°08′43″N · 15°37′59″E · Karinsko more",
    title: "Gdje slatka voda izvire u more",
    lead: "Vrulje su podmorski izvori slatke vode — po njima se zove i ovaj komad obale. Kuća je nekoliko koraka od šljunka, s dva odvojena apartmana, po jedan na svakom katu. Uzmite jedan ili cijelu kuću.",
    facts: [
      "Dva apartmana",
      "Svaki za 4 osobe",
      "Cijela kuća do 8",
      "Dvije kuhinje",
    ],
    primaryCta: "Provjeri datume",
    secondaryCta: "Pogledaj oba apartmana",
  },

  soundings: {
    label: "Udaljenosti",
    title: "Od ulaznih vrata",
    note: "Izmjereno autom, osim prvoga — do mora se ide bos.",
    items: [
      { depth: "40 m", label: "Do šljunka i mora" },
      { depth: "1,2 km", label: "Gornji Karin, trgovina i kafić" },
      { depth: "1,5 km", label: "Franjevački samostan iz 15. stoljeća" },
      { depth: "12 km", label: "Obrovac i kanjon Zrmanje" },
      { depth: "17 km", label: "Benkovac i izlaz na autocestu A1" },
      { depth: "50 km", label: "Zadar, autom oko 45 minuta" },
    ],
  },

  intro: {
    label: "Ukratko",
    title: "Jedna kuća, dva apartmana, bez recepcije",
    body: [
      "Karinsko more je gotovo zatvoren zaljev, plitak i topao, spojen s Novigradskim morem kanalom širokim jedva stotinjak metara. Kuća je na obali u Vruljama, uz šljunčanu plažu dugu pola kilometra na kojoj i u kolovozu rijetko ima više od desetak ljudi. U kući su dva apartmana, po jedan na svakom katu.",
      "Katovi su potpuno odvojeni. Svaki ima svoj ulaz, svoju kuhinju, dnevni boravak, dvije spavaonice i kupaonicu. Ne dijeli se ništa osim žice za rublje iza kuće. Ako uzmete samo jedan kat, drugi može biti zauzet — ući ćete i izaći a da nikoga ne sretnete.",
      "Ovo ne vodimo kao hotel. Tonči vas dočeka na vratima s ključevima, pokaže koje škure zatvoriti kad zapuše jugo, i pusti vas na miru ako ne tražite savjet. Ako tražite — pitajte. O svakoj uvali na otoku ima mišljenje.",
    ],
  },

  /* Oznake na nacrtu kuće. Kratko — stanu u male prostorije na crtežu. */
  plan: {
    label: "Raspored",
    title: "Raspored, isti na oba kata",
    note: "Nacrt nije u mjerilu. Kliknite kat da vidite više.",
    room1: "Soba 1",
    room2: "Soba 2",
    kitchen: "Kuhinja",
    living: "Dnevni boravak",
    bathroom: "Kupaonica",
    hallway: "Hodnik",
    shower: "Tuš",
    terrace: "Velika terasa",
    stairs: "Stepenice na gornji kat",
    outsideShower: "Vanjski tuš",
  },

  /* One caption per photo in shared.js, keyed by the same id. */
  captions: {
    1: "Gornji kat — dnevni boravak",
    2: "Gornji kat — dnevni boravak",
    3: "Gornji kat — soba 1",
    4: "Gornji kat — soba 2",
    5: "Gornji kat — soba 2, ormari",
    6: "Gornji kat — kupaonica",
    7: "Gornji kat — tuš",
    8: "Donja terasa, iz dvorišta",
    9: "Donja terasa, iz dvorišta",
    10: "Donja terasa, iz dvorišta",
    11: "Donji kat — dnevni boravak",
    12: "Donji kat — soba 1",
    13: "Donji kat — soba 2",
    14: "Donji kat — kupaonica",
    15: "Kuća s ceste",
  },

  home: {
    unitsLabel: "Dva kata",
    unitsTitle: "Uzmite jedan ili oba",
    unitsLead:
      "Isti standard na oba kata. Razlika je u tome što je vani i koliko stepenica ima do vrata.",
    glimpseLabel: "Kratki pogled",
    glimpseTitle: "Kuća i ono oko nje",
    glimpseLink: "Pogledajte cijelu galeriju",
    guestsLabel: "Gosti",
    guestsTitle: "Što ljudi napišu poslije",
  },

  /* --- Dva apartmana ----------------------------------------------------- */
  /* --- Prostorije -------------------------------------------------------
     Oba apartmana imaju isti raspored, pa je popis soba jedan i zajednički.
     Razlike se upisuju u `roomNotes` pojedinog kata, niže. ------------- */
  rooms: [
    {
      id: "terrace",
      name: "Velika terasa",
      body: "Proteže se cijelom dužinom apartmana, uz jugozapadnu stranu. Na nju se izlazi i iz dnevnog boravka i iz kuhinje, pa ljeti vrata ostaju otvorena cijeli dan. Stol, stolice i mjesta za ležaljke; vanjski tuš je odmah uz stepenice.",
    },
    {
      id: "living",
      name: "Dnevni boravak",
      body: "Najveća prostorija u apartmanu, s izlazom na terasu. Kauč, stol i dovoljno mjesta da se četvero ljudi ne sudara.",
    },
    {
      id: "kitchen",
      name: "Kuhinja",
      body: "Zasebna prostorija, a ne kuhinjski kutak u dnevnom boravku. Štednjak, pećnica, hladnjak, posuđe i vlastiti stol. S terase se ulazi ravno u kuhinju, a iz nje u mali hodnik iz kojeg se ide u kupaonicu i sobe.",
    },
    {
      id: "room1",
      name: "Soba 1",
      body: "Veća od dvije sobe, u kutu uz vanjski zid, s vlastitim prozorom.",
    },
    {
      id: "room2",
      name: "Soba 2",
      body: "Manja soba, uz dnevni boravak.",
    },
    {
      id: "bathroom",
      name: "Kupaonica",
      body: "Između sobe 1 i kuhinje, s malim hodnikom pred vratima. Tuš, umivaonik i WC. Ovo je jedina prostorija po kojoj se dva apartmana razlikuju.",
    },
  ],

  units: {
    upper: {
      name: "Gornji apartman",
      short: "Gornji",
      tagline: "Gornji kat, uz vlastito vanjsko stubište",
      body: "Isti raspored kao dolje: kuhinja, dnevni boravak, dvije sobe, kupaonica i velika terasa uz cijelu dužinu apartmana. Gore se ide vlastitim vanjskim stubištem, pa je dalje od ceste i mirnije, a s terase se gleda preko zaljeva.",
      facts: ["4 osobe", "2 sobe", "1 kupaonica", "68 m²", "Gornji kat"],
      highlights: [
        "Vlastito vanjsko stubište",
        "Mirnije, dalje od ceste",
        "Pogled preko zaljeva s terase",
      ],
      /* Razlike ovog kata u odnosu na zajednički popis soba. */
      roomNotes: {
        bathroom: {
          body: "Tuš, umivaonik i WC. Kupaonica gornjeg apartmana ima i malu nišu koja zalazi u kut sobe 1, a u njoj je tuš bez pregrade i praga. To je jedina razlika između dva apartmana.",
        },
      },
    },

    lower: {
      name: "Donji apartman",
      short: "Donji",
      tagline: "Prizemlje, bez ijedne stepenice",
      body: "Isti raspored kao gore: kuhinja, dnevni boravak, dvije sobe, kupaonica i velika terasa uz cijelu dužinu apartmana. Ulazi se ravno s razine ceste, bez stepenica — lakše s prtljagom, s kolicima ili ako se teško penje. Ljeti je prizemlje i hladnije.",
      facts: ["4 osobe", "2 sobe", "1 kupaonica", "64 m²", "Prizemlje"],
      highlights: [
        "Ulaz bez ijedne stepenice",
        "Hladnije u kolovozu",
        "Najkraći put do mora i do auta",
      ],
      /* Razlike ovog kata u odnosu na zajednički popis soba. */
      roomNotes: {
        bathroom: {
          body: "Tuš, umivaonik i WC, sve u jednoj prostoriji. Za razliku od gornjeg apartmana, ovdje nema odvojene niše za tuš. To je jedina razlika između dva kata.",
        },
      },
    },
  },

  house: {
    name: "Cijela kuća",
    short: "Cijela kuća",
    tagline: "Oba kata, osam ljudi, nitko drugi",
    body: "Kad uzmete oba kata, kuća je samo vaša — obje terase i obje kuhinje. Najčešće je uzimaju dvije obitelji koje putuju zajedno ili jedna veća, jer se djeca mogu razbježati po dva kata a odrasli i dalje sjede za istim stolom.",
    facts: ["8 osoba", "4 sobe", "2 kupaonice", "2 kuhinje", "132 m²"],
    highlights: [
      "Osam osoba, četiri sobe, dvije kupaonice",
      "Dvije terase i dvije kuhinje",
      "Povoljnije nego dva kata odvojeno",
    ],
  },

  apartments: {
    label: "Apartmani",
    title: "Dva kata, dva apartmana",
    lead: "Svaki kat je zaokružena cjelina: kuhinja, dnevni boravak, dvije spavaonice i kupaonica. Uzmite onaj koji vam odgovara, ili oba.",
    chooseLabel: "Odaberite kat",
    chooseTitle: "Gornji ili donji",
    togetherLabel: "Oba zajedno",
    sameLabel: "Zajedničko",
    sameTitle: "Isto u oba apartmana",
    sameNote:
      "Ovo se ne razlikuje s kata na kat — ista oprema, isti standard, ista posteljina.",
    ratesLabel: "Cijene",
    ratesTitle: "Po noći, bez provizije",
    seasonCol: "Razdoblje",
    inPrice: "U cijeni",
    onTop: "Dodatno, i kako se plaća",
    rulesLabel: "Kućni red",
    rulesTitle: "Četiri pravila, i sva su fleksibilna osim drugog",
  },

  unitPage: {
    factsLabel: "Ukratko",
    aboutTitle: "Što ovaj kat ima",
    roomsLabel: "Po sobama",
    roomsTitle: "Što je gdje",
    includedLabel: "Uključeno",
    includedTitle: "Oprema u apartmanu",
    ratesLabel: "Cijene",
    ratesTitle: "Po noći, ovaj kat",
    otherLabel: "Drugi kat",
    otherTitle: "Ili pogledajte",
  },

  amenities: [
    {
      group: "Udobnost",
      items: [
        "Klima u obje sobe",
        "Ventilatori na stropu",
        "Mreže protiv komaraca na svakom prozoru",
        "Dodatne deke i jastuci",
      ],
    },
    {
      group: "Kuhinja",
      items: [
        "Plinski štednjak i električna pećnica",
        "Hladnjak sa zamrzivačem",
        "Moka i filter kava",
        "Kompletan set posuđa, noževi i tanjuri za ribu",
      ],
    },
    {
      group: "Praktično",
      items: [
        "Perilica rublja u svakom apartmanu",
        "Pegla i sušilo za rublje",
        "Brzi optički internet",
        "Ručnici za plažu, suncobran i prijenosni hladnjak",
      ],
    },
    {
      group: "Vani",
      items: [
        "Stol za šest na svakoj terasi",
        "Dvije ležaljke po apartmanu",
        "Vanjski tuš uz stepenice",
        "Parking uz kuću",
      ],
    },
  ],

  rates: {
    note: "Cijene su po noći, za cijeli apartman. Nema naknade za čišćenje ni provizije za rezervaciju — plaćate nama, ne platformi. Cijela kuća je povoljnija nego dva kata uzeta odvojeno.",
    rows: {
      early: { period: "1. svibnja – 14. lipnja", min: "Najmanje 4 noći" },
      june: { period: "15. lipnja – 10. srpnja", min: "Najmanje 5 noći" },
      peak: { period: "11. srpnja – 25. kolovoza", min: "Najmanje 7 noći" },
      late: { period: "26. kolovoza – 20. rujna", min: "Najmanje 5 noći" },
      autumn: { period: "21. rujna – 15. listopada", min: "Najmanje 4 noći" },
    },
    included: [
      "Završno čišćenje i sva posteljina",
      "Voda, struja i plin",
      "Internet i klima",
      "Oprema za plažu: ručnici, suncobran, hladnjak",
    ],
    extra: [
      "Turistička taksa: 1,50 € po osobi po noći, od 12 godina, plaća se u gotovini po dolasku",
      "Predujam od 30 % potvrđuje datume; ostatak se plaća na dan dolaska",
      "Bankovna uplata ili gotovina — kartice ne primamo",
    ],
  },

  houseRules: [
    "Dolazak nakon 15:00, odlazak do 10:00. Oboje je fleksibilno ako je apartman prazan prije ili poslije — samo pitajte.",
    "Tišina između 22:00 i 08:00. Kuće su tu blizu jedna drugoj, prozori su cijelo ljeto otvoreni, a možda je i drugi kat zauzet.",
    "Ne pušite unutra. Terasa je vaša; pepeljara je na stolu.",
    "Dobro odgojeni psi su dobrodošli bez naplate. Recite nam unaprijed da smotamo dobar tepih.",
  ],

  testimonials: [
    {
      quote: "Uzeli smo donji kat u kolovozu. Doručak, ručak i večera — sve na terasi, nijednom za stolom unutra.",
      name: "Marta",
      from: "Krakov",
      when: "kolovoz",
    },
    {
      quote: "Nas osmero u cijeloj kući. Djeca gore, mi dolje, i svi za istim stolom navečer.",
      name: "Daniel i Ute",
      from: "Leipzig",
      when: "rujan",
    },
  ],

  gallery: {
    label: "Galerija",
    title: "Petnaest slika",
    lead: "Oba apartmana, soba po soba, i kuća s ceste.",
    groups: {
      upper: "Gornji apartman",
      lower: "Donji apartman",
      house: "Kuća i okolo",
    },
    closerTitle: "Fotografije idu samo do neke granice",
    closerBody:
      "Ako želite vidjeti nešto što nije tu — tuš, parkirno mjesto, put do mora — pitajte i poslat ćemo.",
  },

  journey: {
    label: "Kako doći",
    title: "Kako doći",
    lead: "Vrulje su na cesti između Obrovca i Gornjeg Karina, u zaleđu sjeverne Dalmacije. Nema trajekta ni mosta — dolazi se autom, i to je jedini razuman način.",
    legsLabel: "Tri etape",
    legsTitle: "Od vrata do vrata",
    practicalLabel: "Praktično",
    legs: [
      {
        stage: "Autom",
        body: "Autocestom A1 do izlaza Benkovac, pa državnom cestom D27 prema Obrovcu — od izlaza je još petnaestak minuta. Iz Zagreba je ukupno oko tri i pol sata, iz Splita oko sat i pol, iz Ljubljane oko četiri.",
      },
      {
        stage: "Avionom",
        body: "Najbliža je zračna luka Zadar (ZAD) u Zemuniku, oko 40 km i pola sata vožnje. Rijeka i Split su oko dva sata. Rent-a-car uzmite na aerodromu — javnog prijevoza do Vrulja praktički nema.",
      },
      {
        stage: "Zadnjih pet kilometara",
        body: "Iz Obrovca se vozi obalom Karinskog mora prema Gornjem Karinu. Vrulje su prije samog ulaska u mjesto, s desne strane. Javite nam kad krenete i izaći ćemo na cestu — skretanje se lako promaši.",
      },
    ],
    car: {
      title: "Treba li vam auto?",
      body: "Da. Ovo nije otok — do trgovine, restorana i većine plaža treba se voziti. Parking je uz kuću, besplatan, za dva auta. Autobus Obrovac – Benkovac prolazi kroz Gornji Karin nekoliko puta dnevno, ali je vozni red prilagođen školi, a ne gostima.",
    },
    weather: {
      title: "Bura i plitko more",
      body: "Karinsko more je plitko — najviše jedanaest metara — i gotovo zatvoreno, pa se ljeti zagrije prije i ostane toplo duže nego otvoreno more. Zbog vrulja i rijeka koje se u njega ulijevaju voda je i manje slana nego vani. Bura s Velebita zna zapuhati i ljeti, ali val u ovako malom zaljevu nema gdje narasti.",
    },
    closerTitle: "Recite nam kad krećete",
    closerBody:
      "Javite nam kad prođete Obrovac i netko će vas čekati na cesti. Skretanje za Vrulje nije označeno i svi ga promaše barem jednom.",
  },

  closer: {
    label: "Dostupnost",
    title: "Recite nam datume i koji kat vas zanima",
    body: "Odgovaramo u roku od jednog dana, obično istu večer. Ako niste sigurni koji kat, napišite samo koliko vas je i mi ćemo predložiti.",
    cta: "Pitajte o datumima",
  },

  contact: {
    label: "Kontakt",
    title: "Pitajte o datumima",
    lead: "Ivana i Tonči čitaju mail svake večeri. Obično odgovorimo istu noć, a uvijek u roku od jednog dana.",
    fields: {
      name: "Vaše ime",
      email: "E-mail",
      unit: "Što vas zanima",
      arrive: "Dolazak",
      depart: "Odlazak",
      guests: "Broj gostiju",
      message: "Nešto što bismo trebali znati",
    },
    unitOptions: {
      upper: "Gornji apartman",
      lower: "Donji apartman",
      house: "Cijela kuća — oba kata",
      either: "Svejedno — recite što je slobodno",
    },
    placeholder:
      "Putujete sa psom, stižete kasno navečer, treba vam dječji krevetić — takve stvari.",
    guestOptions: [
      "1 gost",
      "2 gosta",
      "3 gosta",
      "4 gosta",
      "5 gostiju",
      "6 gostiju",
      "7 gostiju",
      "8 gostiju",
    ],
    guestsNote:
      "Jedan kat prima najviše četvero. Za više od toga treba cijela kuća.",
    submit: "Otvori u aplikaciji za e-mail",
    errors: {
      name: "Treba nam ime da bismo odgovorili.",
      email: "Provjerite e-mail adresu — odgovor ide tu.",
      arrive: "Odaberite datum dolaska.",
      depart: "Odaberite datum odlaska.",
      order: "Odlazak mora biti nakon dolaska.",
      capacity: "Jedan kat prima četvero. Odaberite cijelu kuću ili smanjite broj gostiju.",
    },
    noteBefore:
      "Ovo popunjava e-mail koji vi sami pošaljete, pa ništa ne odlazi s vašeg uređaja dok ne stisnete pošalji. Ništa se ovdje ne pohranjuje.",
    noteAfter:
      "Vaša aplikacija za e-mail sada bi trebala biti otvorena s popunjenim upitom. Pošaljite ga i doći će nam. Ako se ništa nije otvorilo, pišite direktno na {email}.",
    mail: {
      subject: "Upit: {unit}, {arrive} – {depart}, {guests} gostiju",
      name: "Ime",
      email: "E-mail",
      unit: "Apartman",
      arrive: "Dolazak",
      depart: "Odlazak",
      guests: "Gostiju",
      noMessage: "(bez poruke)",
    },
    aside: {
      email: "E-mail",
      phone: "Telefon i WhatsApp",
      address: "Adresa",
      languages: "Govorimo",
      open: "Otvoreno",
    },
  },

  footer: {
    pages: "Stranice",
    reach: "Javite se",
    open: "Otvoreno",
    registration: "Registracija",
  },

  /* Pages that exist but are not written yet. */
  soon: {
    text: "Uskoro dolazi",
  },

  notFound: {
    label: "Izvan karte",
    title: "Na ovoj dubini nema ničega",
    lead: "Stranica koju ste tražili ne postoji. Kuća postoji.",
    cta: "Natrag u luku",
  },
}