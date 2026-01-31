import { generateOGImage, OG_SIZE } from "@/lib/og/generate-image";

export const alt = "Repositories & Project Manager";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return generateOGImage({
    title: "Repositories & Project Manager",
    type: "home",
  });
}
