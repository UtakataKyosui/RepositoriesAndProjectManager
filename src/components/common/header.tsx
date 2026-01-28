import Link from "next/link";
import UserButton from "@/components/auth/user-button";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight">Dev Showcase</h1>
        </Link>
        <div className="flex items-center gap-4">
          <UserButton />
        </div>
      </div>
    </header>
  );
}
