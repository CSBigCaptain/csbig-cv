import process from 'node:process'

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'zh',
			},
			link: [
				// "InterVariable", "Inter", "InterDisplay"
				{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css', media: 'print', onload: 'this.media="all"' },
			],
			script: [
				{
					'src': 'https://stats.kungal.org/script.js',
					'defer': true,
					'data-website-id': '0a850e5a-77c0-440b-aaf5-c0865cb7070f',
				},
			],
		},
		rootAttrs: {
			id: 'zhilu-cv',
		},
	},

	css: [
		'~/assets/main.scss',
	],

	compatibilityDate: '2025-03-11',

	experimental: {
		typescriptPlugin: true,
	},

	features: {
		inlineStyles: false,
	},

	routeRules: {
		// 网站图标
		'/favicon.ico': { redirect: 'https://csbig.top/favicon.ico' },
	},

	runtimeConfig: {
		public: {
			// 从 .env 文件中读取的变量
			name: process.env.NAME,
			phone: process.env.PHONE,
		},
	},

	vite: {
		server: {
			// 预先允许从其他域名访问开发环境，但 --host 才会在所有网络接口上启动监听
			allowedHosts: true,
		},
	},

	// @keep-sorted
	modules: [
		'@nuxt/icon',
		'@unocss/nuxt',
	],

	icon: {
		// 默认是 CSS Mask 模式，在低级 PDF 阅读器中可能无法正常显示
		mode: 'svg',
	},
})
