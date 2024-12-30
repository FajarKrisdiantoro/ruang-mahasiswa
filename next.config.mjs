/** @type {import('next').NextConfig} */

import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  reactStrictMode: true, // Aktifkan React Strict Mode (opsional)
  pwa: {
    dest: "public", // Menyimpan service worker di folder public
    cacheOnFrontEndNav: true, // Mengaktifkan cache untuk navigasi frontend
    aggressiveFrontEndNavCaching: true, // Cache agresif untuk navigasi
    reloadOnOnline: true, // Memuat ulang ketika online
    swcMinify: true, // Mengaktifkan SWC minifier
    workboxOptions: {
      disableDevLogs: true, // Menonaktifkan log dev Workbox
    },
  },
};

export default withPWA(nextConfig);
