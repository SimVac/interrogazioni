export async function load({ fetch, params }) {
	const response = await fetch('/api/materia?' + new URLSearchParams({endpoint: params.endpoint}));
    const data = await response.json();
    const materia = data.materia;
    const elenco = data.elenco;
    return { materia, elenco };
}