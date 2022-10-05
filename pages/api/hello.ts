import { NextRequest } from "next/server";

export default function handler(req: NextRequest) {
  return new Response(`Hello, from ${req.url} I'm now an Edge API Route! :)`);
}

export const config = { runtime: "experimental-edge" };
