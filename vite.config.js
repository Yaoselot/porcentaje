import { defineConfig } from 'vite'
import { exec } from 'child_process'

export default defineConfig({
  server: {
    open: false
  },
  plugins: [
    {
      name: 'open-chrome-new-window',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          exec('start chrome --new-window http://localhost:5173/')
        })
      }
    }
  ]
})