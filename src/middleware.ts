import { Payload } from "@/types/payload";
import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = (request.cookies as any).token;
  if (token) {
    const decodedToken = jwtDecode<Payload>(token);
    console.log(" decodedToken", decodedToken);
    if (decodedToken.exp * 1000 > Date.now()) {
      return null;
    }
  }
  if (request.nextUrl.pathname === "/signin") {
    return null;
  }
  const baseUrl = "http://localhost:3001";
  return NextResponse.redirect(`${baseUrl}/signin`);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
