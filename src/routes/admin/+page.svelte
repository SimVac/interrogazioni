<script>
    import { goto } from '$app/navigation';
    import Navbar from '$lib/components/Navbar.svelte';

    export let data;
    export const materie = data.materie;

    function gotoMateria(endpoint) {
        goto('/materia-admin/' + endpoint);
    }
</script>

<svelte:head>
    <title>Admin</title>
</svelte:head>

<section>
    <div class="hero min-h-screen bg-base-200 mb-16">
        <div class="hero-content text-center">
            <div class="max-w-md pb-10">
                <div class="flex justify-center items-center">
                <img src="wip.png" alt="wip" height="100" width="100" />
                </div>
                <h1 class="text-3xl font-bold mb-16 mt-10">Modifica la materia</h1>
                <div class="grid grid-cols-2 gap-4 place-content-center">
                    {#each materie as materia}
                        <button class="btn btn-primary m-0.5" on:click={() => gotoMateria(materia.endpoint)}>
                            { materia.abbreviazione }
                        </button>
                    {/each}
                </div>
                <button class="btn btn-warning mt-5 w-full" on:click={() => goto('/avvisi-admin')}>Avvisi</button>
            </div>
        </div>
    </div>
    <Navbar />
</section>