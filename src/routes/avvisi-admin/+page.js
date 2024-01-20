import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { isAuthenticated } from 'store';

export async function load({ fetch, params }) {
    isAuthenticated.subscribe(val => {
        if (!val && browser) goto('/login');
    })
	const response = await fetch('/api/avvisi');
    const avvisi = await response.json();
    avvisi.forEach(avviso => avviso.data = new Date(avviso.data));
    return { avvisi };
}