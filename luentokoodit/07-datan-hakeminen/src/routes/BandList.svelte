<script>
	// @ts-nocheck

	// import { bands } from '$lib/bandStore.js';
	// import bands from '$lib/bands.json';
	import Band from './Band.svelte';

	export let bands;

	// let bands = [];

	// async function getBands() {
	// 	const res = await fetch('https://band-api.netlify.app/.netlify/functions/get-bands');
	// 	const data = await res.json();
	// 	bands = data;

	// 	if (res.ok) {
	// 		return data;
	// 	} else {
	// 		throw new Error();
	// 	}
	// }

	// getBands();
</script>

<p><strong>Bändejä softassa ({bands.length} kappaletta)</strong></p>

{#each bands as band}
	<Band {...band} />
{/each}

<!-- {#await getBands()}
	<p>Ladataan bändejä.</p>
{:then bands} -->
<!-- {#each bands as band}
		<Band {...band} />
	{/each} -->
<!-- {:catch error}
	<p>{error.message}</p>
{/await} -->
