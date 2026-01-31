// 環境変数へのアクセスを統一するためのモジュール
// Vercel環境では process.env から直接読み込む
// ローカル開発では dotenvx run -- で環境変数が設定される

export const env = {
  DATABASE_URL: process.env.DATABASE_URL || "",
  BETTER_AUTH_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.BETTER_AUTH_URL ||
        process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
        "http://localhost:3000",
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET || "",
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || "",
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || "",
  NODE_ENV: process.env.NODE_ENV || "development",
};
