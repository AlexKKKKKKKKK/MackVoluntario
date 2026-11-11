import { NextResponse } from "next/server";
import { findProjectById } from "@/repository/project.repository";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const project = await findProjectById(id);

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}
