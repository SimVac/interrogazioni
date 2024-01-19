import { json } from '@sveltejs/kit';
import { getUltimoAvviso } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }){
    const avviso = await getUltimoAvviso();
    return json(avviso);
}