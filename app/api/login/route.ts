import { NextRequest, NextResponse } from 'next/server'
import { AUTH_COOKIE } from '@/middleware'

function safeRedirectPath(path: string | null) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return '/'
  return path
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const password = formData.get('password')
  const from = safeRedirectPath(formData.get('from') as string | null)

  if (password !== process.env.SITE_PASSWORD) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('error', '1')
    loginUrl.searchParams.set('from', from)
    return NextResponse.redirect(loginUrl, { status: 303 })
  }

  const response = NextResponse.redirect(new URL(from, request.url), { status: 303 })
  response.cookies.set(AUTH_COOKIE, process.env.AUTH_SECRET!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
  return response
}
