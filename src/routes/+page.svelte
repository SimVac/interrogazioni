<script>
	import { goto } from '$app/navigation'
	import Navbar from '$lib/components/Navbar.svelte';
	import Avviso from '$lib/components/Avviso.svelte';

	export let data;
	export const materie = data.materie;
	export const avviso = data.avviso;

	export function gotoMateria(endpoint){
		goto('/materia/' + endpoint);
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="flex">
		<div class="hero min-h-screen bg-base-200 mb-16">
			<div class="hero-content text-center">
				  <div class="max-w-md">
					<a href="/avvisi">
						<Avviso { avviso }/>
					</a>
					<h1 class="text-3xl font-bold mb-16 mx-10">Scegli la materia</h1>
					<div class="grid grid-cols-2 gap-4 place-content-center">
						{#each materie as materia}
							{#if materia.attivo}
								<button class="btn btn-primary m-0.5" on:click={() => gotoMateria(materia.endpoint)}>
									{ materia.abbreviazione }
								</button>
							{/if}
						{/each}
					</div>
				  </div>
			</div>
		</div>
		<Navbar/>
	</div>
</section>

<style>
</style>
