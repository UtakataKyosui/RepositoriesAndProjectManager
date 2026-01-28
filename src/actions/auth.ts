"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/");
}

export async function signInWithGithub() {
  const data = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: "/admin",
    },
    headers: await headers(),
  });

  if (data?.url) {
    redirect(data.url);
  }
}
