// @ts-nocheck
import { writable } from 'svelte/store';

function createBands() {
	let kiss = {
		id: 0,
		name: 'Kiss',
		genre: 'rock',
		member_count: 15
	};
	let og_bands = [
		{ ...kiss },
		{ id: 1, name: 'Metallcloica', genre: 'metalli' },
		{ id: 2, name: 'Pantera', genre: 'metal', member_count: 4 },
		{ id: 3, name: '12', genre: 'hard rock' },
		{ id: 4, name: '13', genre: 'disco' }
	];
	// @ts-ignore
	const { subscribe, set, update } = writable([]);

	const add_band = (band) => {
		update((bands) => {
			let id = bands.length;
			return [...bands, { id, ...band }];
		});
	};

	return {
		subscribe,
		// @ts-ignore
		add: add_band,
		reset: () => set([]),
		populate: (bands) => set(bands)
	};
}

export const bands = createBands();
