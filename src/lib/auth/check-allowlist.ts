export function shouldBlockLogin(email: string, adminEmail?: string): boolean {
  if (!adminEmail) return false;
  return email.toLowerCase() !== adminEmail.toLowerCase();
}
