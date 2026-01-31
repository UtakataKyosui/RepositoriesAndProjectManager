import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import UserButton from "@/components/auth/user-button";
import { getSession } from "@/lib/auth/session";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-8">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/admin">
              <LayoutDashboard className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Project Manager
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground"
                href="/admin"
              >
                Projects
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none"></div>
            <UserButton />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 pt-6 px-4 md:px-8">{children}</main>
    </div>
  );
}
