import { json } from '@sveltejs/kit';
import { getMaterie } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }){
    const materie = await getMaterie();
    return json(materie);
}