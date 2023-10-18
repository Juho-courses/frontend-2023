import { writable } from 'svelte/store';

function createBands() {
	let kiss = {
		name: 'Kiss',
		genre: 'rock',
		member_count: 15
	};
	let og_bands = [
		{ ...kiss },
		{ name: 'Metallcloica', genre: 'metalli' },
		{ name: 'Pantera', genre: 'metal', member_count: 4 },
		{ name: '12', genre: 'hard rock' },
		{ name: '13', genre: 'disco' }
	];
	// @ts-ignore
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		// @ts-ignore
		add: (band) => update((bands) => [...bands, band]),
		reset: () => set([])
	};
}

export const bands = createBands();
