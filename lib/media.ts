/** Local files in `public/` in development; GitHub raw on Vercel until git deploy includes binaries. */
export function asset(path: string) {
  if (process.env.VERCEL) {
    return `https://raw.githubusercontent.com/imrichkascak/myslivectvi-hvozdna/main/public${path}`;
  }
  return path;
}
