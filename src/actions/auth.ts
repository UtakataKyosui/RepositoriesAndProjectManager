"use server";

import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/server";

export async function signOut() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error) {
    // セッションが既に削除されている場合などのエラーは無視する
    console.error("Sign out error:", error);
  } finally {
    // DB操作が失敗した場合でも、確実にCookieを削除してクライアント側をログアウト状態にする
    const cookieStore = await cookies();
    cookieStore.delete("better-auth.session_token");
    cookieStore.delete("__Secure-better-auth.session_token");

    // キャッシュをクリア
    revalidatePath("/");
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
