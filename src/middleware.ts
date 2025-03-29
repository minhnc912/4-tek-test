import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = ["vi", "en"];

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
