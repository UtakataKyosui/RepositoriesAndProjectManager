import * as dotenv from "dotenv";
import vercel from "../src/lib/vercel";

dotenv.config();

async function main() {
  console.log("Inspecting Vercel SDK...");
  try {
    // @ts-expect-error
    const projects = await vercel.projects.getProjects({ limit: 1 });
    console.log("Projects:", JSON.stringify(projects, null, 2));
  } catch (e) {
    console.error("Error fetching projects:", e);
  }
}

main();
