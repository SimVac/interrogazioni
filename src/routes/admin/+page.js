import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { isAuthenticated } from 'store';

export async function load({ fetch, params }) {
    isAuthenticated.subscribe(val => {
        if (!val && browser) goto('/login');
    })
	const response = await fetch('/api/materie');
    const materie = await response.json();
    return { materie };
}