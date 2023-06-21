import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FM-004-Interactive-Rating-Component/',
  plugins: [react()],
})
