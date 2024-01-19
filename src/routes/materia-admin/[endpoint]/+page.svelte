<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Back from '$lib/components/Back.svelte';
    import MateriaTabella from './MateriaTabella.svelte';
    import FormAttivo from './FormAttivo.svelte';
    
    export let data;
    export const materia = data.materia;
    export let elenco = data.elenco;

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]
        ];
      }
      return array;
    }

    export function shuffleStudents(){
      elenco = shuffle(elenco);
    }

    export function resetStudents(){
      elenco = elenco.sort((a, b) => {
        return a.cognome.toLowerCase().localeCompare(b.cognome.toLowerCase());
      });
      elenco.forEach((studente, idx) => {
        studente.posizione = idx;
        studente.offerto = false;
        studente.interrogato = false;
      })
    }

    export function sendData(){
      const dati_studenti = elenco.map((studente, idx) => {
        studente.posizione = idx+1;
        return studente;
      })
      const dati = {
        dati_studenti,
        materia
      }
      fetch("/api/materia", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dati)
        });
    }
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
                <MateriaTabella bind:elenco={ elenco }/>
                <div class="flex flex-row justify-around mt-10">
                  <button class="btn primary-btn" on:click={sendData}>
                    Edit
                  </button>
                  <button class="btn primary-btn" on:click={shuffleStudents}>
                    Shuffle
                  </button>
                  <button class="btn primary-btn" on:click={resetStudents}>
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