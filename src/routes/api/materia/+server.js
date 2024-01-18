import { json } from '@sveltejs/kit';
import { getMateria, getElencoMateria, updateMateriaAttivo } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }){
    const endpoint = url.searchParams.get('endpoint');
    const materia = await getMateria(endpoint);

    const elenco = await getElencoMateria(endpoint);
    return json({materia, elenco});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    let data = await request.formData();
    await updateMateriaAttivo(data.get('attivo') == "true" ? true : false, data.get('id'));
    return new Response();
}