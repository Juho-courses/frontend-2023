<script>
	import SuperPerson from './SuperPerson.svelte';

	let superpeople = [
		{
			name: 'Batman',
			superpower: 'rich'
		},
		{
			name: 'Spiderman',
			superpower: 'spideysense'
		},
		{
			name: 'Hulk',
			superpower: 'green'
		}
	];
</script>

<ol>
	{#each superpeople as person}
		<SuperPerson name={person.name} superpower={person.superpower} />
	{/each}
</ol>
