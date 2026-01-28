import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { ExternalLink, GitCommit } from "lucide-react";
import Link from "next/link";
import type { GitHubCommit } from "@/actions/github";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type CommitListProps = {
  commits: GitHubCommit[];
  isLoading?: boolean;
};

const SKELETON_ITEMS = ["skeleton-1", "skeleton-2", "skeleton-3"] as const;

export function CommitList({ commits, isLoading = false }: CommitListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {SKELETON_ITEMS.map((id) => (
          <div
            key={id}
            data-testid="commit-skeleton"
            className="flex gap-3 p-3"
          >
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (commits.length === 0) {
    return (
      <div className="py-8 text-center">
        <GitCommit className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          No commits found for this repository.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {commits.map((commit) => {
        // コミットメッセージの1行目のみ取得
        const firstLine = commit.commit.message.split("\n")[0];
        // 長いメッセージを切り詰め
        const truncatedMessage =
          firstLine.length > 72 ? `${firstLine.slice(0, 72)}...` : firstLine;

        // 相対時間を計算
        const relativeTime = formatDistanceToNow(
          new Date(commit.commit.author.date),
          {
            addSuffix: true,
            locale: ja,
          },
        );

        // アバター画像とフォールバック
        const avatarUrl = commit.author?.avatar_url;
        const authorName =
          commit.author?.login || commit.commit.author.name || "Unknown";
        const authorInitial = authorName.charAt(0).toUpperCase();

        return (
          <Link
            key={commit.sha}
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group">
              <Avatar className="h-10 w-10 shrink-0">
                {avatarUrl && (
                  <AvatarImage src={avatarUrl} alt={`${authorName}'s avatar`} />
                )}
                <AvatarFallback>{authorInitial}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-tight truncate mb-1">
                  {truncatedMessage}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="truncate">{commit.commit.author.name}</span>
                  <span>•</span>
                  <span className="shrink-0">{relativeTime}</span>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
