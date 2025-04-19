import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  base: "/keksogram/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/img/*',
          dest: 'img'
        }
      ]
    })
  ]
});
