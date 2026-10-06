import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// outDir kept as CRA's `build` so the existing Vercel config still works
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build' },
});
