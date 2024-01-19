import { updateAvvisoPreferito } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const dati = await request.json();
    await updateAvvisoPreferito(dati.id, dati.preferito)
    return new Response();
}