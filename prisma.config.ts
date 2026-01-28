import * as dotenvx from "@dotenvx/dotenvx";
import { defineConfig, env } from "prisma/config";

// Load environment variables from .env files
dotenvx.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
