<script>
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind-compat.css';

	import Soon from '$lib/components/home/Soon.svelte';
</script>

<main>
	<Soon />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Fira+Mono:wght@400;500;700&family=Qwigley&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	* {
		font-family:
			'Roboto',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	main {
		@apply flex flex-col w-full h-screen px-5;
	}
</style>
