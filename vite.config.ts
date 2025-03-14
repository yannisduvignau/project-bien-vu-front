import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from '@tailwindcss/vite'
import ViteImagemin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImagemin({
      mozjpeg: {
        progressive: true, // Pour les images jpeg
        quality: 75, // Qualité de compression
      },
      optipng: {
        optimizationLevel: 5, // Niveau d'optimisation
      },
      webp: {
        quality: 75, // Qualité du webp
      },
    }),
    compression({
      algorithm: 'gzip', // Utiliser Gzip pour la compression
      threshold: 10240, // Seulement les fichiers plus grands que 10 Ko seront compressés
      deleteOriginFile: false, // Garder les fichiers originaux après compression
    }),
    // Ou en alternative :
    compression({
      algorithm: 'brotliCompress', // Utiliser Brotli pour la compression
      threshold: 10240, // Seulement les fichiers plus grands que 10 Ko seront compressés
      deleteOriginFile: false, // Garder les fichiers originaux après compression
    }),
  ],
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
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    minify: 'terser', // Terser est utilisé par défaut
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les `console.log` du code de production
      },
    },
    target: 'es2015', // Choisi un target pour n'ajouter que les polyfills nécessaires
    // rollupOptions: {
    //   external: ['react', 'react-dom'], // Externalise React et ReactDOM
    // },
    // rollupOptions: {
    //   output: {
    //     manualChunks: (id) => {
    //       if (id.includes('node_modules')) {
    //         return 'vendor'; // Sépare les dépendances tierces
    //       }
    //     }
    //   }
    // }
  },
})
