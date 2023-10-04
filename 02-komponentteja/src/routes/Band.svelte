<script>
	export let name;
	export let genre;
	export let member_count = 0;

	let crew_size = member_count * 2;

	// export let band_data;
</script>

<div>
	<h3>{name}</h3>
	<p>Genre: {genre}</p>
	<p>Jäsenten määrä: {member_count} (crew size: {crew_size})</p>
</div>

<style>
	div {
		border: 1px solid black;
		margin-bottom: 1rem;
	}
</style>
