// Csak a CMS admin ágyazhatja be az oldalt iframe-be (vizuális szerkesztő).
const adminOrigins = (process.env.NEXT_PUBLIC_CMS_ADMIN_ORIGIN ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheComponents (+ partialPrefetching) kikapcsolva: a CMS client-kit (fetch force-cache + tag) ebben a módban nincs tesztelve.
  // dev: telefonról is elérhető legyen a helyi hálón (különben a JS chunkok/HMR blokkolva → félig tölt be)
  allowedDevOrigins: ["192.168.*.*"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // /admin → a központi Ügyfél Adminra (redirect, nem proxy → a login az admin saját domainjén fut).
    const dashboard = (process.env.DASHBOARD_URL || "https://analytics.webvulcano.hu").replace(/\/+$/, "");
    const slug = process.env.CMS_SITE_SLUG || "salesmax";
    return [
      { source: "/admin", destination: `${dashboard}/${slug}`, permanent: false },
      { source: "/admin/:path*", destination: `${dashboard}/${slug}/:path*`, permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' ${adminOrigins.join(" ")}`.trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
