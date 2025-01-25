import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequestWithAuth } from "next-auth/middleware"

export default async function middleware(req: NextRequestWithAuth) {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  // Protect routes under /api/auth
  if (req.nextUrl.pathname.startsWith("/api/auth")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/auth/signin", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/auth/:path*", "/((?!auth|_next/static|_next/image|favicon.ico).*)"],
}
