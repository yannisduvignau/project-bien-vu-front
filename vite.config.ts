import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
})
