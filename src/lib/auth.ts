import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { env } from "./env";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    trustedOrigins: process.env.NEXT_PUBLIC_BETTER_AUTH_URL !== "http://localhost:3000"
        ? [process.env.NEXT_PUBLIC_BETTER_AUTH_URL!]
        : ["http://localhost:3000"],
    socialProviders: {
        github: {
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET,
        },
    },
});
