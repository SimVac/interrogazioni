<script>
    import Back from '$lib/components/Back.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Avviso from '$lib/components/Avviso.svelte';

    export let data;
    export let avvisi = data.avvisi;

    export async function handleSubmit(event){
        const form = event.target;
        const formData = new FormData(form);

        const dati = {
            titolo: formData.get('titolo'),
            descrizione: formData.get('descrizione')
        };
        await fetch("/api/avvisi/add-avviso", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dati)
        })
        const responseAvvisi = await fetch('/api/avvisi');
        const tempAvvisi = await responseAvvisi.json();
        tempAvvisi.forEach(avviso => avviso.data = new Date(avviso.data));
        avvisi = tempAvvisi;
    }
</script>

<svelte:head>
    <title>Avvisi Admin</title>
</svelte:head>

<section>
    <Back/>
    <div class="hero min-h-screen bg-base-200 mb-16">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <form action="/avvisi/add-avviso" method="post" on:submit|preventDefault={handleSubmit} class="grid my-10 p-4 border-solid border-2 border-primary rounded-lg justify-items-center">
              <h1 class="text-lg font-bold">Aggiungi un nuovo avviso</h1>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Titolo</span>
                </div>
                <input type="text" name="titolo" placeholder="Titolo" class="input input-bordered w-full max-w-xs" required/>
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Descrizione</span>
                </div>
                <textarea class="textarea textarea-bordered"  name="descrizione" placeholder="Descrizione" required></textarea>
               <!-- <input type="text" name="descrizione" placeholder="Descrizione" class="input input-bordered w-full max-w-xs" required/> -->
              </label>
              <button class="btn mt-3" type="submit">Invia</button>
            </form>
            <h1 class="text-3xl font-bold">Avvisi</h1>
            <div class="max-w-md">
              {#each avvisi as avviso}
                <Avviso { avviso } admin=true/>
              {/each}
            </div>
          </div>
        </div>
    </div>
    <Navbar/>
</section>