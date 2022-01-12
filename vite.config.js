import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcss from "./postcss.config.js";

// https://github.com/tailwindlabs/tailwindcss/discussions/3646#discussioncomment-1742991
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		postcss,
	},
});
