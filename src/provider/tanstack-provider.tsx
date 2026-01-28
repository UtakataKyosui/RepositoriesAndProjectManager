"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/client/tanstack-client";

export default function TanStackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
