<script>
	import BandList from './BandList.svelte';
	import { bands } from '$lib/bandStore.js';

	export let data;

	if ($bands.length === 0) {
		bands.populate(data.bands);
	}
</script>

<h1>Bändejä</h1>

<BandList bands={$bands} />
