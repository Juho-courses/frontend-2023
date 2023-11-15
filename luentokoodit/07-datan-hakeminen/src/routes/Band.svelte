<script>
	// @ts-nocheck

	export let name;
	export let genre;
	export let member_count = 0;
	export let id;

	let crew_size = member_count * 2;
</script>

<a href={`/band/${id}`}>
	<div>
		<h3>{name}</h3>
		<p>Genre: {genre}</p>
		{#if member_count !== 0}
			<p>Jäsenten määrä: {member_count} (crew size: {crew_size})</p>
		{:else}
			<p>Jäsenten määrä ei tiedossa.</p>
		{/if}
	</div></a
>

<style>
	a {
		color: inherit;
		text-decoration: inherit;
	}
	div {
		border: 1px solid black;
		margin-bottom: 1rem;
	}
</style>
