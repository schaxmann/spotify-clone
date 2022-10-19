import { NextApiRequest } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

const securePages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  if (securePages.find((pages) => pages === req.nextUrl.pathname)) {
    const token = req.cookies.NOTIFY_ACCESS;

    if (!token) {
      return NextResponse.rewrite(`${origin}/sign-in`);
    } else {
      return NextResponse.rewrite(`${origin}/`);
    }
  }
}
