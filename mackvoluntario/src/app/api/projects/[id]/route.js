import { NextResponse } from "next/server";
import { getProjectById } from "@/services/project.service";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const project = await getProjectById(id);

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
