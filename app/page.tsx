import { days } from '@/lib/itinerary'
import ItineraryClient from '@/components/ItineraryClient'

export default function HomePage() {
  return <ItineraryClient days={days} />
}
