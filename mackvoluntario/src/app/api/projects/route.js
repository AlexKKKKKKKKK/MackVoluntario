import { NextResponse } from "next/server";
import { findAllProjects } from "@/repository/project.repository";

export async function GET() {
  try {
    const projects = await findAllProjects();

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
