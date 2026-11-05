import projects from "@/data/projects.json";

export async function getProjects() {
    return projects;
}

export async function getProjectById(id) {
    console.log("Searching for ID:", id);
    console.log("Available projects:", projects);

    const project = projects.find(
        (project) => String(project.id) === String(id)
    );

    console.log("Found project:", project);

    return project || null;
}
