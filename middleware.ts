import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const PROTECTED_ROUTES = ["/dashboard"];
export const GUEST_ONLY_ROUTES = [
  "/auth/login",
  "/auth/sign-up",
  "/auth/forgot-password",
  "/auth/change-password",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const loggedIn = req.cookies.get("logged_in")?.value === "true";

  // 🔒 block unauthenticated access to protected routes
  if (
    PROTECTED_ROUTES.some((route) => pathname.startsWith(route)) &&
    !loggedIn
  ) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/auth/login";
    return NextResponse.redirect(loginUrl);
  }

  // 🚫 block logged-in users from accessing guest-only pages
  if (
    GUEST_ONLY_ROUTES.some((route) => pathname.startsWith(route)) &&
    loggedIn
  ) {
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = "/dashboard";
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/login",
    "/auth/sign-up",
    "/auth/forgot-password",
    "/auth/change-password",
  ],
};
