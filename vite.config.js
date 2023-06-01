import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        // Configura los detalles de tu archivo manifest.json
        name: "doble 5",
        short_name: "d5",
        description: "Aplicacion web para buscar equipos y partidos de futbol.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#141313",
        theme_color: "#80c833",
        icons: [
          {
            src: "./public/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./public/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "./public/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "./public/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
