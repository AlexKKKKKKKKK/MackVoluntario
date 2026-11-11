const API_URL = process.env.NEXT_PUBLIC_APP_URL;

export async function getProjects() {
    const response = await fetch(`${API_URL}/api/projects`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    return response.json();
}

export async function getProjectById(id) {
    const response = await fetch(`${API_URL}/api/projects/${id}`, {
        cache: "no-store",
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error("Failed to fetch project");
    }

    return response.json();
}
