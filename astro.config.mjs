import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'QimuInfo',
			social: {
				github: 'https://github.com/sony9997/officeWebsite',
			},
			sidebar: [
				{
					label: 'Introduce',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'introduce' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
