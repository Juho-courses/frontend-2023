<script>
	import { superpeople } from '$lib/peopleStore';
	let name = '';
	let superpower = '';

	const handleClick = () => {
		superpeople.add({ name, superpower });
		name = '';
		superpower = '';
	};
</script>

<div>
	<label>
		Name:
		<input bind:value={name} type="text" />
	</label>
	<label>
		Superpower:
		<input bind:value={superpower} type="text" />
	</label>

	<button on:click={handleClick} type="button">Save</button>
</div>
