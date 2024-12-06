import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
	site: 'https://qimuinfo.top',
	integrations: [
		starlight({
			plugins: [
				starlightOpenAPI([
				  {
					base: 'api/runway',
					label: 'Runway API',
					schema:
					  './src/content/schemas/api-service.yaml',
				  },
				]),
			],
			title: 'QimuInfo',
			description: '官网',
			logo: {
				src: './public/favicon.svg'
			},
			social: {
				github: 'https://github.com/sony9997/officeWebsite',
				'x.com': 'https://x.com/donghe71627',
				instagram: 'https://www.instagram.com/sony999774/'
			},
			sidebar: [
				{
					label: '公司介绍',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '公司介绍', slug: 'introduce' },
					],
				},
				{
					label: '服务',
					autogenerate: { directory: 'services' },
				},
				{ 
					label: 'API文档',
					items: [
						// Each item here is one entry in the navigation menu.
						...openAPISidebarGroups,
					]
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
		}),
	],
});
