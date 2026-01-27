import { cache } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getSession = cache(async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (process.env.NODE_ENV === "development") {
      console.log("[getSession] Session retrieved:", session ? "✓ Found" : "✗ Not found");
      if (session) {
        console.log("[getSession] User:", session.user.email);
      }
    }

    return session;
  } catch (error) {
    console.error("[getSession] Error retrieving session:", error);
    return null;
  }
});
