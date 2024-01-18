import { json } from '@sveltejs/kit';
import { getMateria, getElencoMateria } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }){
    const endpoint = url.searchParams.get('endpoint');
    const materia = await getMateria(endpoint);

    const elenco = await getElencoMateria(endpoint);
    return json({materia, elenco});
}