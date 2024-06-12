import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables from .env file
const env = loadEnv(process.env.MODE, process.cwd());

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  define: {
    // Make environment variables available to the client-side code
    'process.env': Object.assign({}, env)
  },
});
