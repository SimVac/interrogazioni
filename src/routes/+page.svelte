<script>
	import { goto } from '$app/navigation'
	import Navbar from '$lib/components/Navbar.svelte';

	export let data;

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
					<h1 class="text-3xl font-bold mb-16 mx-10">Scegli la materia</h1>
					<div class="grid grid-cols-2 gap-4 place-content-center">
						{#each data.materie as materia}
							<button class="btn btn-primary m-0.5" on:click={() => gotoMateria(materia.endpoint)}>
								{ materia.abbreviazione }
							</button>
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
