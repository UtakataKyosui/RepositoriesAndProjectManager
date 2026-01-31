import { createAuthClient } from "better-auth/react";

const baseURL =
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000";
console.log("[Auth-Client] Initializing with Base URL:", baseURL);

export const authClient = createAuthClient({
  baseURL,
  fetchOptions: {
    onError: (ctx) => {
      console.error("Authorization Logic failed:", ctx);
    },
  },
});
