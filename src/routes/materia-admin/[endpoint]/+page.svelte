<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Back from '$lib/components/Back.svelte';
    import MateriaTabella from './MateriaTabella.svelte';
    import FormAttivo from './FormAttivo.svelte';
    
    export let data;
    export const materia = data.materia;
    export const elenco = data.elenco;
</script>

<svelte:head>
    <title>{ materia.nome }</title>
</svelte:head>

<section>
    <div>
        <Back />
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
            <div class="max-w-md mb-16">
              <h1 class="text-3xl font-bold mb-10">{ materia.nome }</h1>
              <div class="overflow-x-auto">
                <MateriaTabella { elenco }/>
                <div class="flex flex-row justify-around mt-10">
                  <button class="btn primary-btn">
                    Edit
                  </button>
                  <button class="btn primary-btn">
                    Shuffle
                  </button>
                  <button class="btn primary-btn">
                    Reset
                  </button>
    
                  <div class="flex items-center">
                    <FormAttivo { materia }/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
</section>