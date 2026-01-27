import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import dotenvx from "@dotenvx/dotenvx";
import prisma from "./prisma";

dotenvx.config();

const betterAuthUrl = dotenvx.get("BETTER_AUTH_URL") || "http://localhost:3000";
const githubClientId = dotenvx.get("GITHUB_CLIENT_ID") || "";
const githubClientSecret = dotenvx.get("GITHUB_CLIENT_SECRET") || "";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    baseURL: betterAuthUrl,
    trustedOrigins: betterAuthUrl !== "http://localhost:3000"
        ? [betterAuthUrl]
        : ["http://localhost:3000"],
    socialProviders: {
        github: {
            clientId: githubClientId,
            clientSecret: githubClientSecret,
        },
    },
});
