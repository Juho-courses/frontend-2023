<script>
	import Band from './Band.svelte';

	let kiss = {
		name: 'Kiss',
		genre: 'rock',
		member_count: 15
	};
</script>

<h1>Bändejä</h1>

<Band {...kiss} />
<!-- <Band band_data={pantera} /> -->
<Band name="Pantera" genre="metal" member_count={4} />
<!-- <Band name="12" genre="hard rock" /> -->
