import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    const sessionCookie = request.cookies.get("better-auth.session_token");
    if (!sessionCookie && request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
