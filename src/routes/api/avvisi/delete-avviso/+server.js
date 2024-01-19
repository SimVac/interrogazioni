import { deleteAvviso } from '$lib/dbQueries';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const id = await request.json();
    await deleteAvviso(id);
    return new Response();
}