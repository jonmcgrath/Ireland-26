'use client'

import { useState } from 'react'
import { Suggestion } from '@/lib/types'

function getVotedKey(id: string) { return `voted_${id}` }

function VoteBar({ yes, no }: { yes: number; no: number }) {
  const total = yes + no
  if (total === 0) return null
  const yesPct = Math.round((yes / total) * 100)
  const noPct = 100 - yesPct
  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
        {yes > 0 && <div className="bg-emerald-400 h-full transition-all" style={{ width: `${yesPct}%` }} />}
        {no > 0 && <div className="bg-red-400 h-full transition-all" style={{ width: `${noPct}%` }} />}
      </div>
      <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">
        {yes} yes · {no} no
      </span>
    </div>
  )
}

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
  const [localSuggestions, setLocalSuggestions] = useState(suggestions)

  function hasVoted(id: string) {
    try { return !!localStorage.getItem(getVotedKey(id)) } catch { return false }
  }

  async function handleVote(id: string, vote: 'yes' | 'no') {
    if (hasVoted(id)) return
    try {
      localStorage.setItem(getVotedKey(id), vote)
    } catch { /* ignore */ }
    setLocalSuggestions(prev => prev.map(s =>
      s.id === id ? { ...s, yes_votes: s.yes_votes + (vote === 'yes' ? 1 : 0), no_votes: s.no_votes + (vote === 'no' ? 1 : 0) } : s
    ))
    await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, vote }),
    })
  }

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
      setLocalSuggestions(prev => [...prev, suggestion])
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

      {localSuggestions.length === 0 && !showForm && (
        <p className="text-sm text-gray-400 italic">
          No suggestions yet — be the first to share your thoughts.
        </p>
      )}

      {localSuggestions.length > 0 && (
        <div className="space-y-2 mb-3">
          {localSuggestions.map(s => {
            const voted = hasVoted(s.id)
            return (
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
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleVote(s.id, 'yes')}
                    disabled={voted}
                    className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                      voted
                        ? 'border-gray-200 text-gray-400 cursor-default'
                        : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                    }`}
                  >
                    👍 Yes {s.yes_votes > 0 && <span>{s.yes_votes}</span>}
                  </button>
                  <button
                    onClick={() => handleVote(s.id, 'no')}
                    disabled={voted}
                    className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border font-medium transition-colors ${
                      voted
                        ? 'border-gray-200 text-gray-400 cursor-default'
                        : 'border-red-200 text-red-600 hover:bg-red-50'
                    }`}
                  >
                    👎 No {s.no_votes > 0 && <span>{s.no_votes}</span>}
                  </button>
                </div>
                <VoteBar yes={s.yes_votes} no={s.no_votes} />
              </div>
            )
          })}
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
