import { NextResponse } from "next/server";
import { getNetWorthSummary } from "@/lib/queries";

// Demonstration API route. Returns the net worth summary as JSON, computed
// entirely from SQL queries. Read-only.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const summary = await getNetWorthSummary();
  return NextResponse.json(summary);
}
