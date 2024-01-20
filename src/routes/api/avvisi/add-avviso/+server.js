import { addAvviso } from '$lib/dbQueries';
 
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const id = await request.json();
    await addAvviso(id);
    return new Response();
}