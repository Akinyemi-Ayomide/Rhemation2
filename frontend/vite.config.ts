import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Rhemation2/',
  server: {
    port: 5173, // Ensure this port is available
    host: true, // Allow access from other devices on the network
  },
});
