import { Day } from './types'

export const days: Day[] = [
  {
    date: 'Thu Aug 6',
    name: 'Arrive Dublin → Kilkenny',
    color: 'amber',
    nav: {
      label: 'Dublin Airport → Kilkenny Ormonde Hotel',
      gmaps: 'https://www.google.com/maps/dir/?api=1&origin=Dublin+Airport,+Ireland&destination=Kilkenny+Ormonde+Hotel,+Ormonde+Street,+Kilkenny,+Ireland',
      waze: 'https://waze.com/ul?q=Kilkenny+Ormonde+Hotel,+Ormonde+Street,+Kilkenny,+Ireland&navigate=yes',
    },
    sections: [
      {
        head: 'Morning — Dublin Airport',
        acts: [
          {
            title: 'Land ~8:20am, Terminal 1',
            desc: "Collect luggage, clear customs, then follow signs to the Car Hire Facility (Eastlands). Pick up both Alamo vehicles — Jon's 9-seater van (conf 2110350632) and Ashley's Kodiaq (ref 729729134). Install child seats. Allow 90–120 min for the group.",
            tags: [{ label: '2 vehicles at Alamo', color: 'teal' }],
          },
          {
            title: 'Drive south to Kilkenny (~1.5 hrs)',
            desc: 'M7 south then M9 — straightforward motorway. Biggest challenge is jet lag, not the road. Stop in Carlow for a coffee if anyone is fading.',
            tags: [{ label: '~1.5 hrs', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Afternoon — Kilkenny',
        acts: [
          {
            title: 'Kilkenny Ormonde Hotel',
            desc: "Early check-in from 1pm confirmed for Jon's Deluxe King (9PNDG1R) and Kinsley's room (EYIJGC9, +€30 each). Alex/Ashley's Superior room (17T115B) is still 4pm — if arriving as a group around 1pm, the hotel will hold that bag until 4pm. Drop bags, let the toddler nap, everyone gets a reset before the afternoon.",
            tags: [{ label: '1pm check-in (2 of 3 rooms)', color: 'amber' }],
          },
          {
            title: 'Kilkenny Castle & Park',
            desc: '12th-century castle in remarkable condition. The 50-acre parkland is excellent for kids — big lawns and river walks. Castle tour ~45 min. Perfect low-key first afternoon.',
            tags: [
              { label: 'castle + grounds', color: 'purple' },
              { label: 'kids can run free', color: 'green' },
            ],
          },
          {
            title: "Optional: St Canice's Cathedral",
            desc: '9th-century round tower for views over the city. A quick 30-min stop if the group has energy.',
            tags: [{ label: 'optional', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Evening — dining options',
        acts: [
          {
            title: 'Marble City Bar',
            desc: 'Casual pub food on High St — kid-friendly, reliable, zero fuss. Perfect for a jet-lagged first night.',
            tags: [{ label: 'casual, kid-friendly', color: 'green' }],
          },
          {
            title: 'Zuni Restaurant',
            desc: 'More polished option on Patrick St. Modern Irish, excellent menu. Good if the group wants something special on arrival night.',
            tags: [{ label: 'book ahead', color: 'red' }],
          },
          {
            title: 'Left Bank',
            desc: 'Gastropub between Marble City and Zuni in vibe. Solid choice for a mixed group.',
            tags: [{ label: 'gastropub', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Stay — 2 nights Kilkenny',
        hotel: [
          {
            name: 'Kilkenny Ormonde Hotel — BOOKED',
            note: '3 reservations: EYIJGC9 (cc Kinsley), 17T115B (cc Ashley Macielak), 9PNDG1R. Modified May 9. Central Kilkenny, walking distance to the castle and Medieval Mile.',
            rec: true,
            link: 'https://www.kilkennyormonde.com',
          },
        ],
      },
    ],
  },
  {
    date: 'Fri Aug 7',
    name: 'Kilkenny — golf, roots & town',
    color: 'purple',
    sections: [
      {
        head: 'Morning — split the group',
        acts: [
          {
            title: 'Golf: Mount Juliet Estate',
            desc: "Championship 18-hole Jack Nicklaus course, 15 min from Kilkenny. Consistently ranked among Ireland's best. Book tee times well in advance.",
            tags: [
              { label: 'pre-book essential', color: 'red' },
              { label: '~15 min from town', color: 'amber' },
            ],
          },
          {
            title: 'Ancestor visits: Callan & Jerpoint Abbey',
            desc: "Callan (25 min from Kilkenny) — Augustinian Friary ruins and St Mary's Church ruins, local parish records. Then Jerpoint Abbey (15 min from Callan) — founded 1158, the finest Cistercian ruin in Ireland with an extraordinary carved cloister. Allow 3–4 hrs for both.",
            tags: [
              { label: 'Kinsley priority', color: 'purple' },
              { label: "Jerpoint: don't skip", color: 'purple' },
            ],
          },
          {
            title: 'Kids: castle grounds & Medieval Mile Museum',
            desc: 'The castle parkland is huge — great for burning energy. The Medieval Mile Museum on High St has interactive exhibits good for older children and the teen.',
            tags: [{ label: 'stroller-friendly grounds', color: 'teal' }],
          },
        ],
      },
      {
        head: 'Afternoon',
        acts: [
          {
            title: "Smithwick's Experience",
            desc: "Kilkenny's red ale brewed here since 1710. 55-min tour with tasting — adults and teen only. Others can browse the Kilkenny Design Centre or relax in the castle park.",
            tags: [
              { label: 'adults/teen only', color: 'amber' },
              { label: 'book online', color: 'red' },
            ],
          },
          {
            title: 'Kilkenny Design Centre, Castle Yard',
            desc: 'Quality Irish craft in one stop — knitwear, ceramics, food. Better value than airport shopping.',
            tags: [{ label: 'great for gifts', color: 'green' }],
          },
        ],
      },
      {
        head: 'Evening — dining options',
        acts: [
          {
            title: 'Rinuccini',
            desc: 'Italian-Irish in a cellar on The Parade. Very popular — book ahead. Good for a group dinner.',
            tags: [{ label: 'book ahead', color: 'red' }],
          },
          {
            title: "Langton's",
            desc: 'Kilkenny institution. Bar and restaurant, good value, informal, handles big groups well.',
            tags: [{ label: 'group-friendly', color: 'green' }],
          },
        ],
      },
    ],
  },
  {
    date: 'Sat Aug 8',
    name: 'Drive Kilkenny → Killarney',
    color: 'teal',
    nav: {
      label: 'Kilkenny Ormonde Hotel → The Lake Hotel, Killarney',
      gmaps: 'https://www.google.com/maps/dir/?api=1&origin=Kilkenny+Ormonde+Hotel,+Ormonde+Street,+Kilkenny,+Ireland&destination=The+Lake+Hotel,+Muckross+Road,+Killarney,+Kerry,+Ireland',
      waze: 'https://waze.com/ul?q=The+Lake+Hotel,+Muckross+Road,+Killarney,+Kerry,+Ireland&navigate=yes',
    },
    sections: [
      {
        head: 'Morning — checkout & drive (~2.5 hrs)',
        acts: [
          {
            title: 'Check out Kilkenny Ormonde, depart ~9–10am',
            desc: 'Head south-west via the N76 / N24 / N8. Total drive is ~2.5 hrs without stops — plan for 3.5 hrs with the group and children.',
            tags: [{ label: 'plan 3.5 hrs total', color: 'amber' }],
          },
          {
            title: 'Stop: Rock of Cashel (~45 min from Kilkenny)',
            desc: '5th-century seat of the Kings of Munster, with a 12th-century round tower and cathedral perched on a dramatic hilltop. Breathtaking from the road and up close. Allow 1 hr. Absolutely worth the stop.',
            tags: [
              { label: 'unmissable', color: 'purple' },
              { label: 'en route', color: 'teal' },
            ],
          },
          {
            title: 'Optional: Cahir Castle (~1 hr from Kilkenny)',
            desc: "One of Ireland's best-preserved castles on the River Suir. Can be seen in 20–30 min, or explored more slowly. Good energy stop before the final stretch.",
            tags: [
              { label: 'optional', color: 'amber' },
              { label: 'en route', color: 'teal' },
            ],
          },
        ],
      },
      {
        head: 'Afternoon — arrive Killarney',
        acts: [
          {
            title: 'Check in: The Lake Hotel',
            desc: "Check-in from 4pm. On the shores of Lough Leane with mountain views. One of Ireland's great hotel settings. The grounds and lakeshore are excellent for the kids to explore while rooms are being readied.",
            tags: [{ label: '4pm check-in', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Evening — Lake Hotel dinner',
        acts: [
          {
            title: 'Dinner at the Lake Hotel, 6:15pm',
            desc: 'Confirmed in the itinerary. Book in advance directly with the hotel (064 66 31035). Children under 8 welcome 6–7pm restaurant sitting, or in the Bistro until 9pm. The lakeview at dusk is spectacular.',
            tags: [
              { label: 'book with hotel', color: 'red' },
              { label: '6:15pm', color: 'teal' },
            ],
          },
        ],
      },
      {
        head: 'Stay — 3 nights Killarney',
        hotel: [
          {
            name: 'The Lake Hotel, Killarney — BOOKED',
            note: '3 rooms confirmed by Ashley Macielak. Refs: 265427 & 265428 (Deluxe Twin/Double, 2 guests each, €877), 265429 (Deluxe Triple, 4 guests, €1,007). Aug 8–11 (3 nights), B&B. Check-in 4pm, checkout 12 noon. Tel: 064 66 31035.',
            rec: true,
            link: 'https://www.lakehotel.ie',
          },
        ],
      },
    ],
  },
  {
    date: 'Sun Aug 9',
    name: 'Killarney — golf, farm & Muckross',
    color: 'purple',
    sections: [
      {
        head: 'Morning — golf',
        acts: [
          {
            title: 'Killarney Golf & Fishing Club',
            desc: "Three courses set in the national park with mountain and lake views. Mahony's Point is the famous one — the 18th tee is on a peninsula in Lough Leane. Arguably the most scenic golf in Ireland. Book well in advance.",
            tags: [
              { label: 'pre-book essential', color: 'red' },
              { label: "Mahony's Point recommended", color: 'purple' },
            ],
          },
        ],
      },
      {
        head: 'Midday — Muckross Traditional Farms',
        acts: [
          {
            title: 'Muckross Traditional Farms',
            desc: 'Open-air folk museum showing Irish farming life in the 1930s–40s. Live animals, working farmhouses, farmers in period costume. One of the best things to do with children in Ireland — genuinely absorbing for all ages. Allow 2 hrs. Stroller-friendly.',
            tags: [
              { label: 'best kids activity of the trip', color: 'green' },
              { label: 'stroller-friendly', color: 'teal' },
            ],
          },
        ],
      },
      {
        head: 'Afternoon — Muckross House & waterfall',
        acts: [
          {
            title: 'Muckross House & Gardens',
            desc: 'Victorian mansion visited by Queen Victoria in 1861. State rooms tour ~45 min. Excellent formal gardens. Jaunting cars (horse-drawn carriages) run from here through the park and to Ross Castle — a classic Killarney experience.',
            tags: [{ label: 'jaunting cars from here', color: 'amber' }],
          },
          {
            title: 'Torc Waterfall',
            desc: '10-min drive from Muckross. Easy 15-min walk to the falls — mostly stroller-accessible on the lower path. Impressive cascade, especially after rain.',
            tags: [{ label: 'stroller-accessible lower path', color: 'teal' }],
          },
        ],
      },
      {
        head: 'Evening — dining options',
        acts: [
          {
            title: "Quinlan's Seafood Bar",
            desc: 'The best seafood in Killarney, on New Street. Kerry fish and shellfish fresh off the boats. Informal but excellent.',
            tags: [{ label: 'best seafood in Killarney', color: 'teal' }],
          },
          {
            title: 'The Laurels',
            desc: 'Traditional pub with live music and food on Main Street. Good craic for a Sunday — music usually starts around 9pm.',
            tags: [{ label: 'live trad music', color: 'amber' }],
          },
          {
            title: "Treyvaud's Restaurant",
            desc: 'Local favourite on Market Cross. Solid modern Irish cooking, good value, handles groups well.',
            tags: [{ label: 'local favourite', color: 'green' }],
          },
        ],
      },
    ],
  },
  {
    date: 'Mon Aug 10',
    name: 'Killarney National Park',
    color: 'teal',
    sections: [
      {
        head: 'Morning — national park',
        acts: [
          {
            title: 'Jaunting car through the park',
            desc: 'Horse-drawn jaunting cars leave from Muckross and Kenmare Place in town. Routes run through old demesne woodland to Ross Castle and the lake. The drivers (jarveys) are local characters — great for the kids. Allow 1.5–2 hrs.',
            tags: [
              { label: 'quintessential Killarney', color: 'purple' },
              { label: 'kids love it', color: 'green' },
            ],
          },
          {
            title: 'Ross Castle',
            desc: '15th-century tower house on the Lough Leane shore, 3km from town. Take a 45-min boat trip on the lake from the jetty here — the mountain views are exceptional. Stroller-friendly grounds.',
            tags: [{ label: 'boat trips from jetty', color: 'teal' }],
          },
        ],
      },
      {
        head: 'Afternoon — scenic options',
        acts: [
          {
            title: "Ladies' View",
            desc: "Iconic Ring of Kerry viewpoint, 20 min south on the N71. Named after Queen Victoria's ladies-in-waiting who were reportedly transfixed by it. One of the great landscape views in Ireland. Pull off, walk around — 20 min.",
            tags: [{ label: 'best viewpoint of the trip', color: 'purple' }],
          },
          {
            title: 'Optional: Dingle Peninsula day trip',
            desc: '45 min drive north-west to Dingle town, then Slea Head Drive (2 hr loop) — clifftop road with Blasket Islands views, ancient beehive huts, and raw Atlantic scenery. The most dramatic drive in Ireland. Allow a full day if going.',
            tags: [
              { label: 'full day if going', color: 'amber' },
              { label: 'optional', color: 'amber' },
            ],
          },
          {
            title: 'Optional: Gap of Dunloe',
            desc: 'Narrow mountain pass 10km west of Killarney. Done by jaunting car, bike, or on foot — no standard cars in the gap itself. Dramatic glaciated valley. Allow 3 hrs.',
            tags: [
              { label: 'no cars in the gap', color: 'amber' },
              { label: 'optional', color: 'amber' },
            ],
          },
        ],
      },
      {
        head: 'Evening — dining options',
        acts: [
          {
            title: 'Murphy-Blacks Restaurant',
            desc: "Fine dining on The Square. Consistently rated one of Killarney's best. Book ahead for a special last-night-in-Kerry dinner.",
            tags: [{ label: 'book ahead', color: 'red' }],
          },
          {
            title: 'Kenmare for dinner (30 min drive)',
            desc: "The small harbour town of Kenmare has a disproportionately excellent restaurant scene. The Lime Tree and Mulcahy's are standouts. Worth the short drive.",
            tags: [{ label: '30 min drive', color: 'amber' }],
          },
        ],
      },
    ],
  },
  {
    date: 'Tue Aug 11',
    name: 'Killarney → Dublin',
    color: 'amber',
    nav: {
      label: 'The Lake Hotel, Killarney → Clontarf Castle Hotel, Dublin',
      gmaps: 'https://www.google.com/maps/dir/?api=1&origin=The+Lake+Hotel,+Muckross+Road,+Killarney,+Kerry,+Ireland&destination=Clontarf+Castle+Hotel,+Castle+Avenue,+Clontarf,+Dublin+3,+Ireland',
      waze: 'https://waze.com/ul?q=Clontarf+Castle+Hotel,+Castle+Avenue,+Clontarf,+Dublin+3,+Ireland&navigate=yes',
    },
    sections: [
      {
        head: 'Morning — checkout & drive (~3.5 hrs)',
        acts: [
          {
            title: 'Check out Lake Hotel, depart ~9am',
            desc: 'Checkout by 12 noon — aim to leave by 9–9:30am. Drive via M8 north through Cork then M8/M7/M50 to Dublin. Or the N21/N20 is a good alternative. Google Maps will route you best on the day.',
            tags: [{ label: 'checkout by 12 noon', color: 'amber' }],
          },
          {
            title: 'Optional lunch stop: Cork City (~1.5 hrs in)',
            desc: 'The English Market in Cork is a beautiful Victorian food hall — great for takeaway and a stretch. Or stop at Cahir or Tipperary town if the kids need a break sooner.',
            tags: [{ label: 'optional', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Afternoon — check in Dublin',
        acts: [
          {
            title: 'Clontarf Castle Hotel',
            desc: 'Check-in from 1pm. Castle hotel on the north Dublin coast, 15 min from the city centre. Let everyone decompress before the final evening.',
            tags: [{ label: '1pm check-in', color: 'teal' }],
          },
          {
            title: 'Clontarf Promenade & Bull Island',
            desc: '4km flat coastal walk from the hotel. Stroller-friendly, views back to the Dublin mountains. Bull Island nature reserve is just across the bridge — seals and seabirds.',
            tags: [{ label: 'stroller-friendly', color: 'teal' }],
          },
        ],
      },
      {
        head: 'Evening — last night in Ireland',
        acts: [
          {
            title: 'Downeys of Clontarf',
            desc: 'Pub and restaurant on the seafront, 5 min walk from the hotel. Reliable food, nice setting, low effort — perfect for a tired last evening.',
            tags: [{ label: '5 min from hotel', color: 'green' }],
          },
          {
            title: 'The Winding Stair',
            desc: "Dublin institution above a bookshop, Ha'penny Bridge. Excellent modern Irish cooking with Liffey views. Worth the 20-min drive if the group has energy.",
            tags: [{ label: 'book ahead', color: 'red' }],
          },
          {
            title: 'The Brazen Head',
            desc: "Ireland's oldest pub (est. 1198) on Bridge St, 20 min from Clontarf. Atmospheric stone interior, trad music most evenings. Good for one last pint.",
            tags: [{ label: 'oldest pub in Ireland', color: 'amber' }],
          },
        ],
      },
      {
        head: 'Stay — 1 night Dublin',
        hotel: [
          {
            name: 'Clontarf Castle Hotel — BOOKED',
            note: 'Group booking ref BX2KQZB (arrive Aug 11, depart Aug 12). Individual refs: Ashley 353149321, Jonathan 353149323, Kinsley 353149574. Confirmed May 9. ~15 min NE of city centre.',
            rec: true,
            link: 'https://www.clontarfcastle.ie',
          },
        ],
      },
    ],
  },
  {
    date: 'Wed Aug 12',
    name: 'Departure day',
    color: 'gray',
    sections: [
      {
        head: 'Morning — early start',
        acts: [
          {
            title: 'Hotel breakfast & checkout',
            desc: "Car drop-off is 7:30am so pack the night before and aim to leave by 6:45am. Checkout by 12 noon formally but you'll be long gone. Quick breakfast at the hotel or grab coffee at the airport.",
            tags: [{ label: 'early start', color: 'amber' }],
          },
          {
            title: 'Car return: Alamo, Dublin Airport, 7:30am',
            desc: 'Alamo Car Hire Facility at Dublin Airport Eastlands (follow signs from the N32). Both vehicles due back 7:30am — van conf 2110350632, Kodiaq ref 729729134. ~30 min from Clontarf. Photograph both cars before dropping keys.',
            tags: [{ label: 'both cars due 7:30am', color: 'red' }],
          },
        ],
      },
      {
        head: 'Flights',
        acts: [
          {
            title: 'JetBlue B6 0354 — departs 10:40am',
            desc: 'Dublin Terminal 2 → Boston Logan, arrives 12:50pm. Jon McGrath (seat 26C, conf NWSGVS), Linda McGrath (seat 26B, conf OULTKT), Kinsley Minella (seat 26D) & Britt Minella (seat 26E) — conf OTIGHJ.',
            tags: [
              { label: 'Terminal 2', color: 'teal' },
              { label: '10:40am', color: 'purple' },
            ],
          },
          {
            title: 'US Pre-Clearance in Dublin',
            desc: 'US Customs pre-clearance at Dublin Airport — you clear immigration before boarding. Arrival in Boston is domestic-style, much faster. Allow extra time in the check-in queue for this.',
            tags: [{ label: 'US pre-clearance at Dublin', color: 'teal' }],
          },
        ],
      },
    ],
  },
]
