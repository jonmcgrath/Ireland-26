'use client'

import { useState } from 'react'
import { Suggestion } from '@/lib/types'

interface Props {
  dayIndex: number
  activityTitles: string[]
  suggestions: Suggestion[]
  onNewSuggestion: (s: Suggestion) => void
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(mins / 60)
  const d = Math.floor(hours / 24)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  if (d < 7) return `${d}d ago`
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function SuggestionsSection({ dayIndex, activityTitles, suggestions, onNewSuggestion }: Props) {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [activityTitle, setActivityTitle] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError('Please enter your name and a message.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day_index: dayIndex, name, message, activity_title: activityTitle || null }),
      })
      if (!res.ok) throw new Error()
      const suggestion = await res.json()
      onNewSuggestion(suggestion)
      setName('')
      setMessage('')
      setActivityTitle('')
      setShowForm(false)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mt-6 pt-6 border-t border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
          Family Suggestions
          {suggestions.length > 0 && (
            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-normal">
              {suggestions.length}
            </span>
          )}
        </h3>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="text-sm text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
          >
            + Add yours
          </button>
        )}
      </div>

      {suggestions.length === 0 && !showForm && (
        <p className="text-sm text-gray-400 italic">
          No suggestions yet — be the first to share your thoughts.
        </p>
      )}

      {suggestions.length > 0 && (
        <div className="space-y-2 mb-3">
          {suggestions.map(s => (
            <div key={s.id} className="bg-stone-50 rounded-lg p-3 border border-stone-100">
              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                <span className="text-sm font-semibold text-gray-900">{s.name}</span>
                {s.activity_title && (
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">
                    re: {s.activity_title}
                  </span>
                )}
                <span className="text-xs text-gray-400 ml-auto">{timeAgo(s.created_at)}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{s.message}</p>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-stone-50 rounded-xl border border-stone-200 p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Your name *</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Uncle Brendan"
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">About (optional)</label>
              <select
                value={activityTitle}
                onChange={e => setActivityTitle(e.target.value)}
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="">General — this whole day</option>
                {activityTitles.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Your suggestion *</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
              placeholder="Share your idea, question, or alternative..."
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white resize-none"
            />
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <div className="flex items-center gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium px-4 py-2 rounded-lg disabled:opacity-50 transition-colors"
            >
              {submitting ? 'Posting…' : 'Post suggestion'}
            </button>
            <button
              type="button"
              onClick={() => { setShowForm(false); setError('') }}
              className="text-sm text-gray-500 hover:text-gray-700 px-3 py-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
