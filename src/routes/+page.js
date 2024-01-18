// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export async function load({ fetch, params }) {
	const response = await fetch('/api/materie');
    const materie = await response.json();
    return { materie };
}
