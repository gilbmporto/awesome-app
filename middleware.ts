import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  console.log("Hello there!")

  return NextResponse.redirect(new URL("/", req.nextUrl))
}

export const config = {
  matcher: ["/about/:path*"],
}
