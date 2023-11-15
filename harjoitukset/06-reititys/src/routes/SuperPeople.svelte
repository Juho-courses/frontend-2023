<script>
	import SuperPerson from './SuperPerson.svelte';
	import { superpeople } from '$lib/peopleStore';
</script>

<ol>
	{#each $superpeople as person}
		<SuperPerson name={person.name} superpower={person.superpower} />
	{/each}
</ol>
