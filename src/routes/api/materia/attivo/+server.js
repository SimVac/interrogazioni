import { updateMateriaAttivo } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    let data = await request.json();
    await updateMateriaAttivo(data.attivo, data.id);
    return new Response();
}