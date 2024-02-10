import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './BroKarim-Project/fourth-project/',
  // base: './BroKarim-Project/fourth-project/',
  plugins: [react()],
});
