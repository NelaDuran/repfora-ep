// cypress.config.js
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // opcional: tareas personalizadas
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})