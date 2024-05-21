import { NextResponse } from "next/server";

// project info GET
export async function GET(request: Request) {
  return NextResponse.json(
    { projectInfo: "Secreto", projectId: 1 },
    { status: 200 }
  );
}
