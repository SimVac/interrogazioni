<script>
    import MateriaTabella from './MateriaTabella.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Back from '$lib/components/Back.svelte';

    export let data;
    export const materia = data.materia;
    export const elenco = data.elenco;
</script>

<svelte:head>
	<title>{ materia.abbreviazione }</title>
</svelte:head>

<section>
    <div class="block">
        <Back />
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center mb-16">
                <div class="max-w-md">
                <h1 class="text-3xl font-bold mb-10">{ materia.nome }</h1>
                
                <div class="overflow-x-auto">
                    <MateriaTabella { elenco }/>
                </div>
                </div>
            </div> 
        </div>
        <Navbar />
    </div>
</section>