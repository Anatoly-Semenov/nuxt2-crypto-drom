import type { NuxtConfig } from "@nuxt/types"
require("dotenv").config()

const config: NuxtConfig = {
	// Target: https://go.nuxtjs.dev/config-target
	target: "server",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "crypto-drom",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" }
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Init .ENV variables
	env: {
		BASE_API_URL: process.env.BASE_API_URL || "http://localhost:3000"
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/styles/index.styl"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		"~/plugins/global",
		"~/plugins/ant-design",
		{ src: "~/plugins/api", ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"@nuxt/typescript-build"
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://github.com/Developmint/nuxt-svg-loader#readme
		"nuxt-svg-loader"
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: process.env.BASE_API_URL
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}

export default config
