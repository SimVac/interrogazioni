export async function load({ fetch, params }) {
	const response = await fetch('/api/materie');
    const materie = await response.json();
    const responseAvviso = await fetch('/api/avvisi/ultimo-avviso');
    const avviso = await responseAvviso.json();
    avviso.data = new Date(avviso.data);
    return { materie, avviso };
}
