import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRepositoryName(name: string): string {
  if (!name) return "";
  const parts = name.split("/");
  return parts.length > 1 ? parts[1] : name;
}
