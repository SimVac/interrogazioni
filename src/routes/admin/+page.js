export const prerender = true;
export async function load({ fetch, params }) {
	const response = await fetch('/api/materie');
    const materie = await response.json();
    return { materie };
}