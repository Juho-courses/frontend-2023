export async function load({ fetch }) {
	const res = await fetch('https://band-api.netlify.app/.netlify/functions/get-bands');
	const data = await res.json();
	return { bands: data };
}
