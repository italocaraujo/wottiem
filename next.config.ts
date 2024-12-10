import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Suporte para styled-components
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de ESLint durante a build
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.annihil.us", // Permite imagens do domínio Marvel API
        pathname: "/u/prod/marvel/**", // Caminho permitido
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false, // Garante que builds falhem em caso de erros TS
  },
};

export default nextConfig;
