import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: 'https://qimuinfo.top',
	integrations: [
		starlight({
			plugins: [
				starlightOpenAPI([
				  {
					base: '/apidocs/',
					label: 'API文档',
					schema:
					  './src/content/schemas/api-service.yaml',
				  },
				]),
				starlightImageZoom(),
			],
			title: 'Qimu',
			description: '官网',
			defaultLocale: 'zh-cn',
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
					slug: 'introduce',
				},
				{
					label: '服务',
					items: [
						'services/overview',
						'services/softdev',
						'services/ai',
						'services/mobile',
						'services/cloud_native',
						'services/bigdata',
						'services/blockchain',
					],
				},
				{
					label: '产品',
					autogenerate: { directory: 'products' },
				},
				...openAPISidebarGroups,
				{
					label: '捐赠',
					slug: 'donate',
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
		}),
	],
});
