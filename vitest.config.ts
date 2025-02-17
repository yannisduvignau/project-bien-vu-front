import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Active expect() globalement
    environment: "jsdom", // Utilise jsdom pour simuler le DOM
    setupFiles: "./setupTests.ts", // Charge les configs supplémentaires
  },
});
