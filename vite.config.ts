import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from '@vite-pwa/plugin';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // kita bikin manual di public
    }),
  ],
});
