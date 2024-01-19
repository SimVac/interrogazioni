<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Avviso from '../../lib/components/Avviso.svelte';

    export let data;
    export let avvisi = data.avvisi;
</script>

<svelte:head>
    <title>Avvisi</title>
</svelte:head>

<section>
    <div class="hero min-h-screen bg-base-200 mb-16">
        <div class="hero-content text-center">
            <div class="max-w-md pb-10">
            <h1 class="text-3xl font-bold mb-5 mt-10">Avvisi</h1>
            {#each avvisi as avviso}
                <Avviso { avviso } />
            {/each}
            </div>
        </div>
    </div>
    <Navbar/>
</section>