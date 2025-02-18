import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    // Pour utiliser HTTPS en développement, décommente et définis les bons fichiers de certificat
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, './localhost-key.pem')),
    //   cert: fs.readFileSync(path.resolve(__dirname, './localhost.pem')),
    // },
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@public": path.resolve(__dirname, "public"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@cookies": path.resolve(__dirname, "src/cookies"),
      "@lang": path.resolve(__dirname, "src/lang"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
})
