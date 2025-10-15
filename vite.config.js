import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hospitalmanagement-frontend/'  // ✅ set base path to your repo name
})
