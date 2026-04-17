import { Day, DayColor, Suggestion, TagColor } from '@/lib/types'
import SuggestionsSection from './SuggestionsSection'

const colorStyles: Record<DayColor, { border: string; badge: string; dot: string; head: string }> = {
  green:  { border: 'border-l-emerald-600', badge: 'bg-emerald-700 text-white', dot: 'bg-emerald-600', head: 'text-emerald-700' },
  purple: { border: 'border-l-violet-500',  badge: 'bg-violet-600 text-white',  dot: 'bg-violet-500',  head: 'text-violet-600' },
  amber:  { border: 'border-l-amber-500',   badge: 'bg-amber-600 text-white',   dot: 'bg-amber-500',   head: 'text-amber-700' },
  gray:   { border: 'border-l-slate-400',   badge: 'bg-slate-500 text-white',   dot: 'bg-slate-400',   head: 'text-slate-500' },
}

const tagStyles: Record<TagColor, string> = {
  green:  'bg-green-100 text-green-800',
  purple: 'bg-violet-100 text-violet-800',
  amber:  'bg-amber-100 text-amber-700',
  red:    'bg-red-100 text-red-700',
  teal:   'bg-teal-100 text-teal-700',
}

interface Props {
  day: Day
  dayIndex: number
  suggestions: Suggestion[]
  onNewSuggestion: (s: Suggestion) => void
}

export default function DayCard({ day, dayIndex, suggestions, onNewSuggestion }: Props) {
  const cs = colorStyles[day.color]

  const activityTitles = day.sections
    .flatMap(s => s.acts ?? [])
    .map(a => a.title)

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm border-l-4 ${cs.border} overflow-hidden`}>
      {/* Day header */}
      <div className="px-5 py-4 border-b border-gray-50 flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${cs.badge}`}>
          {dayIndex + 1}
        </div>
        <div>
          <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{day.date}</div>
          <div className="text-lg font-semibold text-gray-900">{day.name}</div>
        </div>
      </div>

      {/* Day body */}
      <div className="px-5 py-4">
        {day.sections.map((section, si) => (
          <div key={si}>
            {/* Hotel section */}
            {section.hotel && (
              <div className="mb-4">
                <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${cs.head}`}>
                  {section.head}
                </div>
                <div className="bg-stone-50 rounded-xl border border-stone-100 p-4 space-y-3">
                  {section.hotel.map((h, hi) => (
                    <div key={hi} className="flex items-start gap-2">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-2 flex-wrap">
                          {h.link ? (
                            <a href={h.link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline transition-colors">
                              {h.name}
                            </a>
                          ) : h.name}
                          {h.rec && (
                            <span className="text-xs border border-emerald-600 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                              recommended
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{h.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Activity section */}
            {section.acts && (
              <div className="mb-4">
                <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${cs.head}`}>
                  {section.head}
                </div>
                <div className="space-y-3">
                  {section.acts.map((act, ai) => (
                    <div key={ai} className="flex gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${cs.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900 leading-snug flex items-center gap-1.5 flex-wrap">
                          {act.title}
                          {act.link && (
                            <a href={act.link} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-600 hover:text-emerald-800 font-normal border border-emerald-200 hover:border-emerald-400 px-1.5 py-0.5 rounded transition-colors">
                              ↗ map / site
                            </a>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 leading-relaxed mt-0.5">{act.desc}</div>
                        {act.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {act.tags.map((tag, ti) => (
                              <span key={ti} className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${tagStyles[tag.color]}`}>
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <SuggestionsSection
          dayIndex={dayIndex}
          activityTitles={activityTitles}
          suggestions={suggestions}
          onNewSuggestion={onNewSuggestion}
        />
      </div>
    </div>
  )
}
