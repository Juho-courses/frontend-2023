<script>
	import { bands } from '$lib/bandStore.js';
	import Band from '../../Band.svelte';
	export let data;

	let band = $bands.find((b) => b.id === +data.id);
</script>

<h1>bändinäkymä</h1>

{#if band !== undefined}
	<Band {...band} />
{:else}
	<p>Bändiä ei löytynyt</p>
{/if}
