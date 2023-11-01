// @ts-nocheck
import { writable } from 'svelte/store';

function createStore() {
	let og_data = [
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
		},
		{
			name: 'Hulk',
			superpower: 'green'
		}
	];

	const { subscribe, set, update } = writable(og_data);

	return {
		subscribe,
		add: (person) => update((people) => [...people, person])
	};
}

export const superpeople = createStore();
