import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    include: [
      "react-dom/client",
      "lenis/react",
      "@react-three/fiber",
      "@react-three/drei",
      "react-responsive",
      "@gsap/react",
      "gsap",
      "gsap/ScrollTrigger",
      "react-icons/fa"
    ]
  }
})


