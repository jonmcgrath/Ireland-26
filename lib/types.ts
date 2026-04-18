export type TagColor = 'green' | 'purple' | 'amber' | 'red' | 'teal'
export type DayColor = 'green' | 'purple' | 'amber' | 'gray'

export interface Tag {
  label: string
  color: TagColor
}

export interface Activity {
  title: string
  desc: string
  tags: Tag[]
  link?: string
}

export interface HotelOption {
  name: string
  note: string
  rec: boolean
  link?: string
}

export interface Section {
  head: string
  acts?: Activity[]
  hotel?: HotelOption[]
}

export interface Day {
  date: string
  name: string
  color: DayColor
  sections: Section[]
}

export interface Suggestion {
  id: string
  day_index: number
  activity_title: string | null
  name: string
  message: string
  created_at: string
  yes_votes: number
  no_votes: number
}
