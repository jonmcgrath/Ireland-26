import { NextRequest, NextResponse } from 'next/server'

export const AUTH_COOKIE = 'ireland_trip_auth'

export function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE)?.value

  if (token && token === process.env.AUTH_SECRET) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', request.nextUrl.pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|api/login|login).*)'],
}
