import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { isAuthenticated } from 'store';

export async function load({ fetch, params }) {
    isAuthenticated.subscribe(val => {
        if (!val && browser) goto('/login');
    })
	const response = await fetch('/api/materia?' + new URLSearchParams({endpoint: params.endpoint}));
    const data = await response.json();
    const materia = data.materia;
    const elenco = data.elenco;
    return { materia, elenco };
}