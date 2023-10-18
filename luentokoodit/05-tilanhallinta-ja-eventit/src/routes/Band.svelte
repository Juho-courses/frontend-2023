<script>
	// @ts-nocheck

	export let name;
	export let genre;
	export let member_count = 0;

	let crew_size = member_count * 2;
</script>

<div>
	<h3>{name}</h3>
	<p>Genre: {genre}</p>
	{#if member_count !== 0}
		<p>Jäsenten määrä: {member_count} (crew size: {crew_size})</p>
	{:else}
		<p>Jäsenten määrä ei tiedossa.</p>
	{/if}
</div>

<style>
	div {
		border: 1px solid black;
		margin-bottom: 1rem;
	}
</style>
