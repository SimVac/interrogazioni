export const prerender = true;
export async function load({ fetch, params }) {
	const materiaResponse = await fetch('/api/materia?' + new URLSearchParams({endpoint: params.endpoint}));
    const data = await materiaResponse.json();
    const materia = data.materia;
    const elenco = data.elenco;
    return { materia, elenco };
}
