import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function GET() {
  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('suggestions')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { day_index, activity_title, name, message } = body

  if (typeof day_index !== 'number' || !name?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('suggestions')
    .insert({
      day_index,
      activity_title: activity_title?.trim() || null,
      name: name.trim(),
      message: message.trim(),
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
