// cypress/support/e2e.js
import { createPinia } from 'pinia'
import './commands'

// Crear Pinia una sola vez
const pinia = createPinia()

beforeEach(() => {
  // Activar Pinia en cada test
  cy.window().then((win) => {
    win.__pinia__ = pinia
    win.$pinia = pinia
  })
})

// Limpiar estado después de cada test
afterEach(() => {
  pinia.state.value = {}
})