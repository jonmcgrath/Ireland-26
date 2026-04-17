'use client'

import { useState } from 'react'
import { Day, DayColor, Suggestion } from '@/lib/types'
import DayCard from './DayCard'

const tabColors: Record<DayColor, { active: string; inactive: string }> = {
  green:  { active: 'bg-emerald-700 text-white border-emerald-700', inactive: 'text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-700' },
  purple: { active: 'bg-violet-600 text-white border-violet-600',   inactive: 'text-gray-600 border-gray-200 hover:border-violet-300 hover:text-violet-600' },
  amber:  { active: 'bg-amber-600 text-white border-amber-600',     inactive: 'text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-600' },
  gray:   { active: 'bg-slate-500 text-white border-slate-500',     inactive: 'text-gray-600 border-gray-200 hover:border-slate-300 hover:text-slate-500' },
}

const logistics = [
  { key: 'Flight', val: 'Aer Lingus Boston Logan → Dublin direct (~6.5 hrs overnight). Depart eve Aug 5, arrive ~7–8am Aug 6.' },
  { key: 'Van', val: '9-seater Mercedes Vito or VW Transporter. Book via Europcar/Hertz Dublin Airport. Add 2 child seats (ages 3 & 6).' },
  { key: 'Driving', val: 'Left-hand side, narrow roads. Designate one driver. Gets easy after day 1.' },
  { key: 'Rooms', val: "3–4 rooms per night. A self-catering house in Kilkenny is ideal for the toddler's routine." },
  { key: 'Weather', val: '15–19°C (60–67°F), rain likely. Light waterproof jacket for everyone.' },
  { key: 'Pre-Clearance', val: 'Dublin Airport has US Customs pre-clearance — you clear immigration before boarding. Arrival in Boston is domestic-style.' },
]

interface Props {
  days: Day[]
  initialSuggestions: Suggestion[]
}

export default function ItineraryClient({ days, initialSuggestions }: Props) {
  const [activeDay, setActiveDay] = useState(0)
  const [suggestions, setSuggestions] = useState(initialSuggestions)
  const [showLogistics, setShowLogistics] = useState(false)

  function handleNewSuggestion(s: Suggestion) {
    setSuggestions(prev => [...prev, s])
  }

  const daySuggestions = suggestions.filter(s => s.day_index === activeDay)
  const totalSuggestions = suggestions.length

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0c4a2e] via-[#115c38] to-[#0e5233]">
        <div className="max-w-3xl mx-auto px-4 pt-10 pb-8">
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">Family Trip · Aug 2026</p>
          <h1 className="text-4xl font-bold text-white mb-1 tracking-tight">Ireland</h1>
          <p className="text-emerald-200 text-base">Boston to Dublin · 8 people · 7 days</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: 'Dates', val: 'Aug 5 eve – Aug 12' },
              { label: 'Group', val: '5 adults · teen · 6yo · 3yo' },
              { label: 'Route', val: 'Dublin · Wicklow · Kilkenny' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/10 rounded-xl px-3 py-3">
                <div className="text-emerald-300 text-xs font-medium uppercase tracking-wide">{stat.label}</div>
                <div className="text-white text-sm font-medium mt-0.5 leading-snug">{stat.val}</div>
              </div>
            ))}
          </div>

          {totalSuggestions > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-emerald-200 text-xs font-medium">
                {totalSuggestions} family suggestion{totalSuggestions !== 1 ? 's' : ''} posted
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Alert */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex gap-3 items-start">
          <span className="text-amber-500 mt-0.5 flex-shrink-0 text-base">⚠</span>
          <p className="text-sm text-amber-800">
            <strong>Book now:</strong> the 9-seater van and Dublin hotel. August is peak season — both sell out by May.
          </p>
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
