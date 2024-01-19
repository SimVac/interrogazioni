import { json } from '@sveltejs/kit';
import { getAvvisi } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }){
    const avvisi = await getAvvisi();
    return json(avvisi);
}