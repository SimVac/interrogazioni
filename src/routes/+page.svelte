<script>
	import Materia from './Materia.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Materie</h1>
	{#each data.materie as materia}
		<Materia {materia} />
	{/each}
</section>

<style>
</style>
