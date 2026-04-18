import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { id, vote } = await req.json()

  if (!id || (vote !== 'yes' && vote !== 'no')) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const supabase = getSupabase()
  const { data, error } = await supabase.rpc('increment_vote', {
    row_id: id,
    vote_type: vote,
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
