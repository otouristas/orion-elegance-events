import { NextRequest, NextResponse } from 'next/server';

/** Preserve the production canonical host and keep migration previews unindexed. */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const production = ['ktimaorion.gr', 'www.ktimaorion.gr'].includes(url.hostname);

  if (production && (url.hostname === 'www.ktimaorion.gr' || url.protocol !== 'https:')) {
    url.hostname = 'ktimaorion.gr';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  if (!production && url.pathname === '/robots.txt') {
    return new NextResponse('User-agent: *\nDisallow: /\n', {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  const response = NextResponse.next();
  if (!production) response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = { matcher: '/:path*' };
