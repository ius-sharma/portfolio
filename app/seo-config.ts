const fallbackUrl = "http://localhost:3000";

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;
  const candidate = envUrl || vercelUrl || fallbackUrl;

  try {
    return new URL(candidate);
  } catch {
    return new URL(fallbackUrl);
  }
}

export const siteUrl = getSiteUrl();
export const siteName = "Ayush Sharma Portfolio";
