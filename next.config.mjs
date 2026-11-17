/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera una web estática en la carpeta "out", lista para GitHub Pages.
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
