import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: "injectManifest",
			srcDir: "src",
			filename: "service-worker.js",
			injectRegister: null,
			manifest: {
				name: "sveltekit-pwa",
				short_name: "sveltekit-pwa",
				description: "SvelteKit template for Progressive Web App",
				background_color: "rgb(247 247 248)",
				theme_color: "rgb(247 247 248)",
				lang: "en-US",
				icons: [
					{
						src: "favicon.png",
						sizes: "128x128",
						type: "image/png",
						purpose: "any maskable"
					}
				]
			},
		})
	]
});
