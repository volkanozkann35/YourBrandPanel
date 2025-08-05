import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import detectPort from 'detect-port';

export default defineConfig(async () => {
  const basePort = 5173;
  const port = await detectPort(basePort);
  if (port !== basePort) console.log(`⚠️ Port ${basePort} dolu, ${port} kullanılıyor.`);
  return {
    plugins: [react()],
    server: { port },
  };
});
