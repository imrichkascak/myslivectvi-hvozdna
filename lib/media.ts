/** Local files in `public/` while developing; GitHub raw only on a Vercel production/preview build. */
export function asset(path: string) {
  if (process.env.VERCEL && process.env.NODE_ENV !== "development") {
    return `https://raw.githubusercontent.com/imrichkascak/myslivectvi-hvozdna/main/public${path}`;
  }
  return path;
}
