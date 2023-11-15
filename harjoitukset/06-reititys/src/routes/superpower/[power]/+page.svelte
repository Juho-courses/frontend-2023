<script>
	import { superpeople } from '$lib/peopleStore.js';
	import SuperPerson from '../../SuperPerson.svelte';
	export let data;

	let found = $superpeople.filter((p) => p.superpower === data.power);
</script>

<div>
	<h3>Voima: {data.power}</h3>

	{#if found.length > 0}
		{#each found as person}
			<SuperPerson {...person} />
		{/each}
	{:else}
		<p>Ei yhtään sankaria, jolla voimana {data.power}!</p>
	{/if}
</div>
