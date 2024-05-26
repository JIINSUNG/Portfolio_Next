import projectDetailData from "@/shared/assets/projectDetail";
import { NextResponse } from "next/server";

// project info GET
export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const data = projectDetailData[params.id - 1];
  if (!data) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
  return NextResponse.json({ ...data }, { status: 200 });
}
