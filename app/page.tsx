import { getSupabase } from '@/lib/supabase'
import { days } from '@/lib/itinerary'
import { Suggestion } from '@/lib/types'
import ItineraryClient from '@/components/ItineraryClient'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let suggestions: Suggestion[] = []
  try {
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from('suggestions')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) console.error('Supabase SELECT error:', error)
    suggestions = data ?? []
  } catch (e) {
    console.error('Supabase connection error:', e)
  }

  return <ItineraryClient days={days} initialSuggestions={suggestions} />
}
