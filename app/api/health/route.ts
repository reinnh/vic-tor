import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { status: "ok", message: "Healthy and operational ✅" },
    { status: 200 }
  );
}
