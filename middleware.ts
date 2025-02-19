import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get('session');
    const isAuthPage = request.nextUrl.pathname.startsWith('/signin');

    if (!isLoggedIn && !isAuthPage) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    if (isLoggedIn && isAuthPage) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
