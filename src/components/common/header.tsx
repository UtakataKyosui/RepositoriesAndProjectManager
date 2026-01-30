import Link from "next/link";
import UserButton from "@/components/auth/user-button";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight">
            泡沫 京水の作成中コンテンツ一覧
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4">
            <Link
              href="/roadmap"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
          </nav>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
