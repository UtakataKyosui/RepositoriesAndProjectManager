import { ImageResponse } from "next/og";

export type OGImageType = "home" | "project" | "roadmap";

export interface OGImageOptions {
  title: string;
  type: OGImageType;
  description?: string;
}

// OGP画像サイズ
export const OG_SIZE = {
  width: 1200,
  height: 630,
};

// タイプに応じたバッジラベル
const TYPE_LABELS: Record<OGImageType, string> = {
  home: "Home",
  project: "Project",
  roadmap: "Roadmap",
};

// Google Fontsから Noto Sans JP を読み込む
async function loadNotoSansJP(): Promise<ArrayBuffer> {
  const fontResponse = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap",
  );
  const css = await fontResponse.text();

  // CSSからフォントURLを抽出
  const fontUrlMatch = css.match(/src: url\(([^)]+)\)/);
  if (!fontUrlMatch) {
    throw new Error("Failed to extract font URL from Google Fonts CSS");
  }

  const fontUrl = fontUrlMatch[1];
  const font = await fetch(fontUrl);
  return font.arrayBuffer();
}

export async function generateOGImage({
  title,
  type,
  description,
}: OGImageOptions): Promise<ImageResponse> {
  // 日本語フォントを読み込む
  const notoSansJP = await loadNotoSansJP();

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundImage:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
        color: "white",
        padding: "60px",
      }}
    >
      {/* 装飾要素 - 左上 */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          height: "300px",
          width: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* 装飾要素 - 右下 */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          height: "350px",
          width: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* タイプバッジ - 上部 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 24px",
            borderRadius: "9999px",
            background: "rgba(99, 102, 241, 0.3)",
            border: "1px solid rgba(99, 102, 241, 0.5)",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#c7d2fe",
          }}
        >
          {TYPE_LABELS[type]}
        </div>
      </div>

      {/* メインコンテンツエリア - 中央 */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 40px",
        }}
      >
        {/* タイトル */}
        <div
          style={{
            fontSize: title.length > 30 ? 48 : 64,
            fontWeight: 700,
            background:
              "linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #818cf8 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.3,
            maxWidth: "100%",
            wordBreak: "break-word",
          }}
        >
          {title}
        </div>

        {/* 説明文（オプション） */}
        {description && (
          <div
            style={{
              marginTop: "24px",
              fontSize: 24,
              color: "#9ca3af",
              lineHeight: 1.5,
              maxWidth: "80%",
            }}
          >
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </div>
        )}
      </div>

      {/* 著者名 - 左下 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            fontWeight: 500,
          }}
        >
          泡沫 京水
        </div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        {
          name: "Noto Sans JP",
          data: notoSansJP,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
