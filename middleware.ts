import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { GUEST_ONLY_ROUTES, PROTECTED_ROUTES } from "./app/config/auth.config";

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

// 👇 define routes where middleware should run
const allRoutes = [...PROTECTED_ROUTES, ...GUEST_ONLY_ROUTES];

// expand matcher for dynamic routes like /dashboard/settings
const matcher = allRoutes.map((route) =>
  PROTECTED_ROUTES.includes(route) ? `${route}/:path*` : route
);

export const config = {
  matcher,
};
