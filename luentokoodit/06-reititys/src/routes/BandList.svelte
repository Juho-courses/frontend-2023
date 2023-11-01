<script>
	import { bands } from '$lib/bandStore.js';
	import Band from './Band.svelte';
</script>

<p><strong>Bändejä softassa ({$bands.length} kappaletta)</strong></p>

{#each $bands as band}
	<Band {...band} />
{/each}
