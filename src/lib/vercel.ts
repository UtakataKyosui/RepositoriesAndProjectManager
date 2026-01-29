import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_BEARER_TOKEN,
});

export default vercel;

export async function getProjectByRepo(repoUrl: string) {
  try {
    const response = await vercel.projects.getProjects({
      repoUrl,
      limit: "1",
    });

    // biome-ignore lint/suspicious/noExplicitAny: complex SDK union type
    let projects: any[] = [];
    if ("projects" in response) {
      projects = response.projects;
    } else if (Array.isArray(response)) {
      projects = response;
    }

    return projects[0] || null;
  } catch (error) {
    console.error("Failed to fetch Vercel project:", error);
    return null;
  }
}
