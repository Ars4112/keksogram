import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import viteImagemin from "vite-plugin-imagemin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	root: path.resolve(__dirname, "src"),
	base: "/keksogram/",
	publicDir: true,
	build: {
		outDir: "../dist",
		emptyOutDir: true,
	},
	plugins: [
		viteImagemin({
			gifsicle: { optimizationLevel: 3 },
			mozjpeg: { quality: 75 },
			optipng: { optimizationLevel: 5 },
			svgo: {
				plugins: [{ name: "removeViewBox" }, { name: "removeEmptyAttrs", active: false }],
			},
		}),
		viteStaticCopy({
			targets: [
				{
					src: path.resolve(__dirname, "src/photos/*.jpg"),
					dest: "photos",
				},
			],
		}),
	],
});
