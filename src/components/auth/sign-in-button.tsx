"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SignInButton() {
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/admin"
        }, {
            onSuccess: () => {
                setLoading(false);
            },
            onError: (ctx) => {
                setLoading(false);
                toast.error(ctx.error.message);
            }
        });
    };

    return (
        <Button onClick={handleSignIn} disabled={loading} variant="outline" size="sm">
            <Github className="mr-2 h-4 w-4" />
            {loading ? "Signing in..." : "Sign in with GitHub"}
        </Button>
    );
}
