import { NextRequest, NextResponse } from 'next/server';
import { protectedRoutes, Route } from '@/constants/routes';
import { getSession } from '@/utils/session';
import { cookies } from 'next/headers';

export default function middleware(req: NextRequest) {
  const isProtectedRoute = protectedRoutes.includes(
    req.nextUrl.pathname as Route,
  );
  const isAuth = getSession({ cookies });

  if (isProtectedRoute && !isAuth) {
    return NextResponse.redirect(new URL(Route.LOGIN, req.url));
  }

  const headers = new Headers();
  headers.set('x-url', req.url);

  return NextResponse.next({
    headers,
  });
}
