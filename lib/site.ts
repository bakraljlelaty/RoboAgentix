/**
 * Canonical site origin (no trailing slash).
 *
 * Resolves to the live production domain on Vercel, so Open Graph images and
 * canonical URLs are correct both on the temporary *.vercel.app domain and
 * once the custom domain (roboagentix.ai) is attached as production. Override
 * locally with NEXT_PUBLIC_SITE_URL.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://roboagentix.ai")
).replace(/\/+$/, "");
