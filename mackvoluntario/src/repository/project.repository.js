import projects from "@/data/projects.json";

export async function findAllProjects() {
    return projects;
}

export async function findProjectById(id) {
    return projects.find(
        (project) => String(project.id) === String(id)
    ) || null;
}
