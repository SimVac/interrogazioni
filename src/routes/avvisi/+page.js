export async function load({ fetch, params }) {
	const response = await fetch('/api/avvisi');
    const avvisi = await response.json();
    avvisi.forEach(avviso => avviso.data = new Date(avviso.data));
    return { avvisi };
}
