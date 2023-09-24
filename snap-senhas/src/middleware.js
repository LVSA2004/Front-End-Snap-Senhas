import { NextResponse } from 'next/server'
 
export function middleware(request) {
    if (!request.cookies.has("snap_token")){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
export const config = {
  matcher: [
    '/cadastro/:path*',
    '/GeradorDeSenha/:path*',
    '/Home/:path*',
    '/NovaSenha/:path*',
    '/ResetSenha/:path*',
  ]
}