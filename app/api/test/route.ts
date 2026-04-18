import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = getSupabase()
    const { data, error } = await supabase.from('suggestions').select('*')
    return NextResponse.json({ data, error, count: data?.length ?? 0 })
  } catch (e) {
    return NextResponse.json({ exception: String(e) }, { status: 500 })
  }
}
