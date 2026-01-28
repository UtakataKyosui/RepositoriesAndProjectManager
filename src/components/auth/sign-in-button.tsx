"use client";

import { Github } from "lucide-react";
import { useState } from "react";
import { signInWithGithub } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default function SignInButton() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await signInWithGithub();
  };

  return (
    <Button
      onClick={handleSignIn}
      disabled={loading}
      variant="outline"
      size="sm"
    >
      <Github className="mr-2 h-4 w-4" />
      {loading ? "Signing in..." : "Sign in with GitHub"}
    </Button>
  );
}
