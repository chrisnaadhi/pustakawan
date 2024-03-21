<script>
	import { base } from '$app/paths';

	const date = new Date();
</script>

<section>
	<div class="bg-img" />
	<div class="absolute w-full h-full bg-dark-8 opacity-80 z-1" />
	<div class="z-2 flex flex-col gap-3">
		<h1>Pustakawan</h1>
		<p>
			Portal Pustakawan untuk berbagi pengalaman, ilmu dan ide untuk pengembangan koleksi pustaka
			dan infrastruktur yang mendukungnya.
		</p>
	</div>
</section>

<style>
	section {
		@apply flex flex-col items-center justify-center h-full max-w-3xl ma text-center gap-3;
	}

	.bg-img {
		background-image: url('/img/lib.webp');
		@apply absolute w-full h-screen object-cover z-0;
	}

	h1 {
		@apply text-9xl text-violet font-semibold;
		font-family: 'Qwigley';
	}

	p {
		@apply text-md font-semibold text-white;
	}
</style>
