import { json } from '@sveltejs/kit';
import { getMateria, getElencoMateria, updateOrdine } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }){
    const endpoint = url.searchParams.get('endpoint');
    const materia = await getMateria(endpoint);

    const elenco = await getElencoMateria(endpoint);
    return json({materia, elenco});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    let data = await request.json();
    data.dati_studenti.forEach(async studente => {
        await updateOrdine(studente, data.materia)
    });
    return new Response();
}
