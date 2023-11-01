<script>
	import { bands } from '$lib/bandStore.js';
	let name = '';
	let genre = '';
	let member_count = 0;

	function saveBand() {
		let band = { name, genre, member_count };

		bands.add(band);
		name = '';
		genre = '';
		member_count = 0;
	}
</script>

<div>
	<input bind:value={name} placeholder="Nimi" />
	<input bind:value={genre} placeholder="Genre" />
	<input bind:value={member_count} placeholder="number" />
	<button on:click={saveBand}>Tallenna</button>
</div>
