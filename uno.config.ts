import {
	defineConfig,
	presetUno,
	presetIcons,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Roboto',
				mono: ['Fira Code', 'Fira Mono'],
				headings: 'Qwigley'
			}
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
});
