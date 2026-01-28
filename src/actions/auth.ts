"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function signOut() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error) {
    // セッションが既に削除されている場合などのエラーは無視してリダイレクトする
    console.error("Sign out error:", error);
  }
  redirect("/");
}

export async function signInWithGithub() {
  try {
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
  } catch (error) {
    console.error("Sign in error:", error);
    throw error; // サインインエラーは呼び出し元に通知するべきか、あるいはエラーページへ？
  }
}
