import { getSupabase } from '@/lib/supabase'
import { days } from '@/lib/itinerary'
import { Suggestion } from '@/lib/types'
import ItineraryClient from '@/components/ItineraryClient'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let suggestions: Suggestion[] = []
  try {
    const supabase = getSupabase()
    const { data } = await supabase
      .from('suggestions')
      .select('*')
      .order('created_at', { ascending: true })
    suggestions = data ?? []
  } catch {
    // Supabase not configured yet — show empty suggestions
  }

  return <ItineraryClient days={days} initialSuggestions={suggestions} />
}
