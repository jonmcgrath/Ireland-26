export interface FlightPassenger {
  name: string
  flightSeat: string
  conf: string
}

export interface FlightLeg {
  label: string
  passengers: FlightPassenger[]
}

export interface CarBooking {
  driver: string
  vehicle: string
  note: string
  ref: string
}

export interface HotelBooking {
  name: string
  loc: string
  status: string
  statusType: 'confirmed' | 'modified'
  link: string
  note: string
  refs: string[]
}

export const reservationsAlert =
  'All hotels and cars confirmed. Still to arrange: dinner reservations at Lake Hotel (Aug 9–10 evenings) and a farewell dinner in Dublin (Aug 11).'

export const airReservation = {
  summary: 'JetBlue B6 0353 outbound (Aug 5) · JetBlue B6 0354 return (Aug 12)',
  manageLink: 'https://www.jetblue.com/manage-trips',
  legs: [
    {
      label: 'Outbound — JetBlue B6 0353 · Wed Aug 5, 9:08pm BOS (Terminal C) → Thu Aug 6, 8:20am DUB',
      passengers: [
        { name: 'Jon McGrath', flightSeat: 'JetBlue B6 0353 · Seat 6A Mint', conf: 'NWSGVS' },
        { name: 'Linda McGrath', flightSeat: 'JetBlue B6 0353 · Seat 6F Mint', conf: 'OULTKT' },
        { name: 'Kinsley Minella', flightSeat: 'JetBlue B6 0353 · Seat 22D', conf: 'OTIGHJ' },
        { name: 'Britt Minella', flightSeat: 'JetBlue B6 0353 · Seat 22E', conf: 'OTIGHJ' },
      ],
    },
    {
      label: 'Return — JetBlue B6 0354 · Wed Aug 12, 10:40am DUB → 12:50pm BOS · Terminal 2 Dublin',
      passengers: [
        { name: 'Jon McGrath', flightSeat: 'JetBlue B6 0354 · Seat 26C · departs 10:40am', conf: 'NWSGVS' },
        { name: 'Linda McGrath', flightSeat: 'JetBlue B6 0354 · Seat 26B · departs 10:40am', conf: 'OULTKT' },
        { name: 'Kinsley Minella', flightSeat: 'JetBlue B6 0354 · Seat 26D · departs 10:40am', conf: 'OTIGHJ' },
        { name: 'Britt Minella', flightSeat: 'JetBlue B6 0354 · Seat 26E · departs 10:40am', conf: 'OTIGHJ' },
      ],
    },
  ] as FlightLeg[],
}

export const carReservation = {
  summary: '2 vehicles · Alamo Dublin Airport · Aug 6 pick-up 10:30am — Aug 12 drop-off 7:30am',
  manageLink: 'https://www.alamo.com/en/manage-reservation.html',
  cars: [
    { driver: 'Jon McGrath', vehicle: 'Alamo · Ford Tourneo Custom 9-seater', note: 'via RentalCars.com · Voucher 741804900', ref: '2110350632' },
    { driver: 'Ashley Macielak', vehicle: 'Alamo · Skoda Kodiaq', note: 'via Booking.com · RentalCover ins. YXHA-RWPY-INS', ref: '729729134' },
  ] as CarBooking[],
}

export const hotelReservation = {
  summary: '3 properties · 6 nights · Kilkenny → Killarney → Dublin',
  footer: 'Kilkenny Ormonde Aug 6–8 · Lake Hotel Aug 8–11 · Clontarf Castle Aug 11–12 · Cancelled: Kilkenny Ormonde ref ZZI3EWH (May 1)',
  hotels: [
    {
      name: 'Kilkenny Ormonde',
      loc: 'Kilkenny · Aug 6–8 · 2 nights · 3 rooms',
      status: 'Modified May 9',
      statusType: 'modified',
      link: 'https://www.kilkennyormonde.com',
      note: 'Booker: Jonathan McGrath · Cc: Kinsley (EYIJGC9), Ashley Macielak (17T115B) · Early check-in 1pm added May 9 for EYIJGC9 & 9PNDG1R (+€30 ea.) — 17T115B still 4pm',
      refs: ['EYIJGC9', '17T115B', '9PNDG1R'],
    },
    {
      name: 'The Lake Hotel',
      loc: 'Killarney · Aug 8–11 · 3 nights · 3 rooms',
      status: 'Confirmed May 6',
      statusType: 'confirmed',
      link: 'https://www.lakehotel.ie',
      note: 'Booker: Ashley Macielak · B&B · 265427 & 265428: Deluxe Lakeview Twin/Double (2 guests ea.) · 265429: Deluxe Triple (4 guests, €1,007)',
      refs: ['265427', '265428', '265429'],
    },
    {
      name: 'Clontarf Castle',
      loc: 'Dublin · Aug 11–12 · 1 night · 3 rooms',
      status: 'Confirmed May 9',
      statusType: 'confirmed',
      link: 'https://www.clontarfcastle.ie',
      note: 'Group ref BX2KQZB · Ashley 353149321 · Jonathan 353149323 · Kinsley 353149574 — not duplicates, all valid',
      refs: ['BX2KQZB', '353149321', '353149323', '353149574'],
    },
  ] as HotelBooking[],
}
