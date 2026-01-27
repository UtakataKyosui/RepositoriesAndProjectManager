import dotenvx from "@dotenvx/dotenvx";

// グローバルで一度だけ初期化
if (!globalThis.__dotenvxInitialized) {
  dotenvx.config();
  globalThis.__dotenvxInitialized = true;
}

export const env = {
  DATABASE_URL: dotenvx.get("DATABASE_URL") || "",
  NEXT_PUBLIC_BETTER_AUTH_URL: dotenvx.get("NEXT_PUBLIC_BETTER_AUTH_URL") || "http://localhost:3000",
  BETTER_AUTH_URL: dotenvx.get("BETTER_AUTH_URL") || "http://localhost:3000",
  BETTER_AUTH_SECRET: dotenvx.get("BETTER_AUTH_SECRET") || "",
  GITHUB_CLIENT_ID: dotenvx.get("GITHUB_CLIENT_ID") || "",
  GITHUB_CLIENT_SECRET: dotenvx.get("GITHUB_CLIENT_SECRET") || "",
  NODE_ENV: dotenvx.get("NODE_ENV") || "development",
};

declare global {
  var __dotenvxInitialized: boolean | undefined;
}
