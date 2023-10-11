<script>
	import Band from './Band.svelte';
	import BandList from './BandList.svelte';
	let kiss = {
		name: 'Kiss',
		genre: 'rock',
		member_count: 15
	};
	let bands = [
		{ ...kiss },
		{ name: 'Metallcloica', genre: 'metalli' },
		{ name: 'Pantera', genre: 'metal', member_count: 4 },
		{ name: '12', genre: 'hard rock' },
		{ name: '13', genre: 'disco' }
	];
</script>

<h1>Bändejä</h1>

<BandList>
	{#each bands as band}
		<Band {...band} />
	{/each}
</BandList>
