'use client'

import { useState, useEffect } from 'react'
import { Day, DayColor, Suggestion } from '@/lib/types'
import { reservationsAlert } from '@/lib/reservations'
import DayCard from './DayCard'
import ReservationsSection from './ReservationsSection'

const tabColors: Record<DayColor, { active: string; inactive: string }> = {
  green:  { active: 'bg-emerald-700 text-white border-emerald-700', inactive: 'text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-700' },
  purple: { active: 'bg-violet-600 text-white border-violet-600',   inactive: 'text-gray-600 border-gray-200 hover:border-violet-300 hover:text-violet-600' },
  amber:  { active: 'bg-amber-600 text-white border-amber-600',     inactive: 'text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-600' },
  gray:   { active: 'bg-slate-500 text-white border-slate-500',     inactive: 'text-gray-600 border-gray-200 hover:border-slate-300 hover:text-slate-500' },
  teal:   { active: 'bg-teal-700 text-white border-teal-700',       inactive: 'text-gray-600 border-gray-200 hover:border-teal-300 hover:text-teal-700' },
}

const logistics = [
  { key: 'Outbound', val: 'JetBlue B6 0353 — Boston Logan (Terminal C) departs Wed Aug 5, 9:08pm → Dublin arrives Thu Aug 6, 8:20am. Confs: NWSGVS (Jon, seat 6A Mint), OULTKT (Linda, seat 6F Mint), OTIGHJ (Kinsley seat 22D & Britt seat 22E).' },
  { key: 'Return', val: 'JetBlue B6 0354 — Dublin Terminal 2, departs Wed Aug 12, 10:40am → Boston Logan 12:50pm. Jon seat 26C (conf NWSGVS), Linda seat 26B (conf OULTKT), Kinsley seat 26D & Britt seat 26E (conf OTIGHJ).' },
  { key: 'Van (Jon)', val: 'Alamo at Dublin Airport (via RentalCars.com). Ford Tourneo Custom 9-seater or similar. Conf #2110350632, voucher 741804900. Pick-up Aug 6, 10:30am. Drop-off Aug 12, 7:30am.' },
  { key: 'Car (Ashley)', val: 'Alamo at Dublin Airport (via Booking.com). Skoda Kodiaq or similar. Ref 729729134. Pick-up Aug 6, 10:30am. Drop-off Aug 12, 7:30am. RentalCover insurance: YXHA-RWPY-INS.' },
  { key: 'Driving', val: 'Left-hand side, narrow roads — especially between Kilkenny and Killarney. Designate drivers in advance. Gets natural after day 1.' },
  { key: 'Rooms', val: '2 nights Kilkenny Ormonde (Aug 6–8) · 3 nights Lake Hotel Killarney (Aug 8–11) · 1 night Clontarf Castle Dublin (Aug 11–12).' },
  { key: 'Weather', val: '15–19°C (60–67°F), rain likely. Light waterproof jacket for everyone.' },
  { key: 'Pre-Clearance', val: 'Dublin Airport has US Customs pre-clearance — you clear immigration before boarding. Arrival in Boston is domestic-style.' },
]

interface Props {
  days: Day[]
}

export default function ItineraryClient({ days }: Props) {
  const [activeDay, setActiveDay] = useState(0)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showLogistics, setShowLogistics] = useState(false)
  const [showReservations, setShowReservations] = useState(false)

  useEffect(() => {
    fetch('/api/suggestions')
      .then(r => r.json())
      .then(data => setSuggestions(Array.isArray(data) ? data : []))
      .catch(() => {})
  }, [])

  function handleNewSuggestion(s: Suggestion) {
    setSuggestions(prev => [...prev, s])
  }

  const daySuggestions = suggestions.filter(s => s.day_index === activeDay)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative min-h-[380px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-125 blur-2xl brightness-75"
          style={{ backgroundImage: "url('/hero.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
      </header>

      {/* Alert */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex gap-3 items-start">
          <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">⚠</span>
          <p className="text-sm text-amber-800">{reservationsAlert}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* Logistics toggle */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <button
            onClick={() => setShowLogistics(v => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-900">Trip logistics</span>
            <span className="text-gray-400 text-sm">{showLogistics ? '▲ Hide' : '▼ Show'}</span>
          </button>
          {showLogistics && (
            <div className="border-t border-gray-50 px-5 pb-4">
              <dl className="divide-y divide-gray-50">
                {logistics.map(row => (
                  <div key={row.key} className="py-3 grid grid-cols-[90px_1fr] gap-4">
                    <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wide pt-0.5">{row.key}</dt>
                    <dd className="text-sm text-gray-700 leading-relaxed">{row.val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        {/* Reservations toggle */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <button
            onClick={() => setShowReservations(v => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-900">Reservations &amp; confirmations</span>
            <span className="text-gray-400 text-sm">{showReservations ? '▲ Hide' : '▼ Show'}</span>
          </button>
          {showReservations && (
            <div className="border-t border-gray-50 px-5 pt-4 pb-4">
              <ReservationsSection />
            </div>
          )}
        </div>

        {/* Day tabs */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-2 pb-1 min-w-max">
            {days.map((day, i) => {
              const tc = tabColors[day.color]
              const isActive = i === activeDay
              const daySuggCount = suggestions.filter(s => s.day_index === i).length
              return (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all whitespace-nowrap ${isActive ? tc.active : `bg-white ${tc.inactive}`}`}
                >
                  <span className="font-semibold">Day {i + 1}</span>
                  <span className={`text-xs font-normal ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                    {day.date.split(' ').slice(1).join(' ')}
                  </span>
                  {daySuggCount > 0 && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {daySuggCount}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Active day */}
        <DayCard
          day={days[activeDay]}
          dayIndex={activeDay}
          suggestions={daySuggestions}
          onNewSuggestion={handleNewSuggestion}
        />

        <p className="text-center text-xs text-gray-400 pb-4">
          Ireland Family Trip · August 2026
        </p>
      </div>
    </div>
  )
}
