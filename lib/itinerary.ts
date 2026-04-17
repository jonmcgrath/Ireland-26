import { Day } from './types'

export const days: Day[] = [
  {
    date: 'Wed Aug 6',
    name: 'Arrive Dublin',
    color: 'green',
    sections: [
      {
        head: 'Morning — arrival',
        acts: [
          {
            title: 'Land Dublin Airport ~7–8am',
            desc: 'Collect luggage, pick up the 9-seater van, install child seats. Allow 90 min at the airport for the group.',
            tags: [],
          },
          {
            title: 'Check in, rest',
            desc: "Hotel may not have rooms ready at 9am. Drop bags and find a nearby café. The 3-year-old will need a nap — plan around it.",
            tags: [],
          },
        ],
      },
      {
        head: 'Afternoon',
        acts: [
          {
            title: "St. Stephen's Green",
            link: 'https://www.google.com/maps/search/?api=1&query=St+Stephens+Green+Dublin',
            desc: '27-acre public park in the city center. Toddler-safe, a duck pond, wide paths. Perfect low-key first afternoon — everyone is tired.',
            tags: [
              { label: 'great for 3yo + 6yo', color: 'green' },
              { label: 'stroller-friendly', color: 'teal' },
            ],
          },
        ],
      },
      {
        head: 'Evening',
        acts: [
          {
            title: 'Dinner: Baggot Street area',
            desc: "Avoid Temple Bar on night 1 — it's loud and touristy. Baggot Street (Doheny & Nesbitt's, O'Brien's) is more local, quieter, and genuinely good.",
            tags: [{ label: 'pub food', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Stay — 4 nights Dublin',
        hotel: [
          { name: 'InterContinental Dublin', note: '4-star, Ballsbridge, spacious, easy van parking. Best for large groups.', rec: false, link: 'https://dublin.intercontinental.com' },
          { name: 'Clayton Hotel Burlington Road', note: '4-star, central, large hotel easiest for multiple connecting rooms. More affordable.', rec: true, link: 'https://www.claytonhotelburlingtonroad.com' },
          { name: 'Large Airbnb townhouse (Ballsbridge/Ranelagh)', note: "Georgian house sleeps 8–10. One kitchen — best for the toddler's routine and family meals.", rec: false, link: 'https://www.airbnb.com/s/Ballsbridge--Dublin/homes' },
        ],
      },
    ],
  },
  {
    date: 'Thu Aug 7',
    name: 'Dublin — zoo, castle, music',
    color: 'purple',
    sections: [
      {
        head: 'Morning',
        acts: [
          {
            title: 'Dublin Zoo, Phoenix Park',
            link: 'https://www.dublinzoo.ie',
            desc: "One of Europe's best zoos. Wide paved paths, fully stroller-accessible. Plan 3–4 hours. Picnic lunch in Phoenix Park afterwards — 1,750 acres of open space.",
            tags: [
              { label: 'best morning for young kids', color: 'green' },
              { label: 'stroller-friendly', color: 'teal' },
            ],
          },
        ],
      },
      {
        head: 'Afternoon',
        acts: [
          {
            title: 'Dublin Castle',
            link: 'https://dublincastle.ie',
            desc: 'Historic seat of British rule in Ireland. State apartments tour is 45 min — good for adults and the teen. The open courtyard is manageable with small kids.',
            tags: [{ label: 'history', color: 'purple' }],
          },
          {
            title: 'Optional: Book of Kells, Trinity College',
            link: 'https://www.tcd.ie/visitors/book-of-kells/',
            desc: 'Pre-book tickets online — sells out weeks ahead. Adults/teen only; 30 min, worth it.',
            tags: [{ label: 'pre-book required', color: 'red' }],
          },
        ],
      },
      {
        head: 'Evening',
        acts: [
          {
            title: 'Traditional music session',
            desc: "The Cobblestone (Smithfield) or Mulligan's (Poolbeg St). Sessions start ~9pm — do dinner first, arrive by 8:30pm to get a table. Genuinely atmospheric, not staged for tourists.",
            tags: [{ label: 'live trad music', color: 'amber' }],
          },
        ],
      },
    ],
  },
  {
    date: 'Fri Aug 8',
    name: 'Day trip — Wicklow',
    color: 'green',
    sections: [
      {
        head: 'Morning (45 min from Dublin)',
        acts: [
          {
            title: 'Powerscourt Estate & Gardens',
            link: 'https://powerscourt.com/gardens/',
            desc: "One of Ireland's great formal gardens set against the Wicklow Mountains — genuinely spectacular. Fully stroller-accessible. Café on site. Allow 2 hours.",
            tags: [
              { label: 'stroller-friendly', color: 'teal' },
              { label: 'gardens', color: 'green' },
            ],
          },
        ],
      },
      {
        head: 'Midday (20 min further)',
        acts: [
          {
            title: 'Glendalough',
            link: 'https://www.google.com/maps/search/?api=1&query=Glendalough+Wicklow+Ireland',
            desc: 'A 6th-century monastic settlement in a glacial valley. The round tower and ruins are ancient and striking. The lakeside walk (1km, flat) is pushchair-friendly. Allow 1.5 hrs.',
            tags: [
              { label: 'ancient history', color: 'purple' },
              { label: 'mountain valley', color: 'green' },
            ],
          },
        ],
      },
      {
        head: 'Afternoon — return to Dublin',
        acts: [
          {
            title: '~1hr drive back, free time',
            desc: 'Rest at hotel. Adults can walk Grafton Street or Merrion Square. Optional evening: Guinness Storehouse for adults/teen (pre-book).',
            tags: [{ label: 'optional: Guinness Storehouse', color: 'amber' }],
          },
        ],
      },
    ],
  },
  {
    date: 'Sat Aug 9',
    name: 'Drive to Kilkenny',
    color: 'amber',
    sections: [
      {
        head: 'Morning — checkout + drive (~1.5 hrs)',
        acts: [
          {
            title: 'M9 motorway south',
            desc: 'Straightforward drive. Optional stop at Kildare Village outlet center if anyone wants a browse — good plaza with decent coffee.',
            tags: [],
          },
        ],
      },
      {
        head: 'Afternoon',
        acts: [
          {
            title: 'Kilkenny Castle & Park',
            link: 'https://www.kilkennycastle.ie',
            desc: '12th-century castle in remarkable condition. The 50-acre parkland behind is excellent for kids — big open lawns and river walks. Castle tour is ~45 min, good for adults and the teen.',
            tags: [
              { label: 'castle + grounds', color: 'purple' },
              { label: 'kids can run free', color: 'green' },
            ],
          },
        ],
      },
      {
        head: 'Evening',
        acts: [
          {
            title: 'Medieval Mile — dinner in Kilkenny',
            desc: 'Walk High St and Parliament St — best-preserved medieval streetscape in Ireland. Campagne (fine dining, book ahead), Zuni, or Marble City Bar for something more casual.',
            tags: [{ label: 'book dinner ahead', color: 'red' }],
          },
        ],
      },
      {
        head: 'Stay — 2 nights Kilkenny',
        hotel: [
          { name: 'Mount Juliet Estate', note: 'Luxury country house 25 min from Callan. Exceptional grounds, spa. The standout stay of the trip. Book immediately.', rec: true, link: 'https://www.mountjuliet.ie' },
          { name: 'Kilkenny River Court Hotel', note: '4-star, central, directly on the River Nore opposite the castle. Very family-friendly.', rec: false, link: 'https://www.rivercourt.com' },
          { name: 'Self-catering farmhouse near Callan', note: "Airbnb farmhouses sleep 8–12, puts you in the Callan area. Best for the toddler's routine.", rec: false, link: 'https://www.airbnb.com/s/Callan--County-Kilkenny/homes' },
        ],
      },
    ],
  },
  {
    date: 'Sun Aug 10',
    name: 'Callan + Jerpoint Abbey',
    color: 'purple',
    sections: [
      {
        head: 'Morning — Callan (25 min from Kilkenny)',
        acts: [
          {
            title: 'Callan town',
            link: 'https://www.google.com/maps/search/?api=1&query=Callan+County+Kilkenny+Ireland',
            desc: "Historic market town. Main sights: Augustinian Friary ruins (15th century) and St. Mary's Church ruins. Walk the main street, find a local café. Small town — 1.5–2 hours covers it well.",
            tags: [{ label: 'your must-see', color: 'purple' }],
          },
        ],
      },
      {
        head: 'Midday — Jerpoint Abbey (15 min from Callan)',
        acts: [
          {
            title: 'Jerpoint Abbey',
            link: 'https://www.google.com/maps/search/?api=1&query=Jerpoint+Abbey+Kilkenny+Ireland',
            desc: "Founded 1158, one of the finest Cistercian abbeys in Ireland. Remarkably intact carved cloister arcade. Guided tours are excellent. Outdoor grounds easy with kids. Allow 1.5 hrs. Don't skip this.",
            tags: [
              { label: 'hidden gem of the trip', color: 'purple' },
              { label: 'guided tours available', color: 'teal' },
            ],
          },
        ],
      },
      {
        head: 'Afternoon',
        acts: [
          {
            title: "Smithwick's Experience (adults + teen)",
            link: 'https://www.smithwicksexperience.com',
            desc: "Kilkenny's red ale brewed here since 1710. Tour is 55 min, includes tasting. Adults/teen only — others walk the Kilkenny design district or relax in the castle park.",
            tags: [{ label: 'adults/teen only', color: 'amber' }],
          },
        ],
      },
    ],
  },
  {
    date: 'Mon Aug 11',
    name: 'Drive back to Dublin',
    color: 'green',
    sections: [
      {
        head: 'Morning',
        acts: [
          {
            title: 'Leisurely checkout',
            desc: 'No rush. If at Mount Juliet, use the grounds in the morning. Leave by midday.',
            tags: [],
          },
        ],
      },
      {
        head: 'Midday — optional stop',
        acts: [
          {
            title: 'Irish National Stud & Japanese Gardens, Kildare',
            link: 'https://www.irishnationalstud.ie',
            desc: 'On the M9, ~45 min from Kilkenny. The Japanese garden is world-class and fully stroller-friendly. Horse stud fascinating for all ages. Allow 2 hrs if you stop.',
            tags: [
              { label: 'stroller-friendly', color: 'teal' },
              { label: 'all ages', color: 'green' },
            ],
          },
        ],
      },
      {
        head: 'Evening — last night in Dublin',
        acts: [
          {
            title: 'Special farewell dinner',
            desc: "Merrion Row or Baggot Street area. Peploe's, Dax, or The Shelbourne Saddle Room. Book ahead — these fill up in August.",
            tags: [{ label: 'book ahead', color: 'red' }],
          },
        ],
      },
      {
        head: 'Stay — 1 night Dublin',
        hotel: [
          { name: 'Same Dublin hotel as nights 1–4', note: 'Book Aug 6–9 + Aug 11 together. Confirm you can get the same rooms back when booking.', rec: false },
        ],
      },
    ],
  },
  {
    date: 'Tue Aug 12',
    name: 'Departure day',
    color: 'gray',
    sections: [
      {
        head: 'Morning',
        acts: [
          {
            title: "Bewley's, Grafton Street",
            link: 'https://www.bewleys.com/ie/cafes/grafton-street/',
            desc: "Final Irish breakfast in the city's most famous café. Then Kilkenny Design Centre on Nassau Street for quality Irish gifts.",
            tags: [{ label: 'final morning', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Afternoon — Dublin Airport',
        acts: [
          {
            title: 'Transfer and depart',
            desc: 'Allow 90 min from city center. Return the van at the airport. Aer Lingus afternoon flight to Boston Logan.',
            tags: [],
          },
          {
            title: 'US Pre-Clearance',
            desc: 'Dublin Airport has US Customs pre-clearance — you clear US immigration before boarding. Arrival in Boston is domestic-style, much faster.',
            tags: [{ label: 'US pre-clearance at Dublin', color: 'teal' }],
          },
        ],
      },
    ],
  },
]
