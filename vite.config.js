import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 KEEP THIS! This is required for Tailwind 4
  ],
  base: "Portfolio-Website", // 👈 Add this line (replace with your repo name)
})