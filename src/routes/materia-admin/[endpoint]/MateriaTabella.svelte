<script>
    export let elenco;
</script>

<table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Cognome</th>
        <th>Interrogato</th>
        <th>Offerto</th>
      </tr>
    </thead>
    <tbody>
        {#each elenco as studente}
            <tr>
                <th>{ studente.nome }</th>
                <th>{ studente.cognome }</th>
                {#if !studente.interrogato }
                    <th>
                        <input id={ studente.cognome + "-interrogato" } name={ studente.cognome + "-interrogato" } type="checkbox" class="toggle toggle-primary" on:change={() => studente.interrogato = document.getElementById(studente.cognome + "-interrogato").checked} />
                    </th>
                {:else}
                    <th>
                        <input id={ studente.cognome + "-interrogato" } name={ studente.cognome + "-interrogato" } type="checkbox" class="toggle toggle-primary" checked on:change={() => studente.interrogato = document.getElementById(studente.cognome + "-interrogato").checked}/>
                    </th>
                {/if}
                {#if !studente.offerto }
                    <th>
                        <input id={ studente.cognome + "-offerto" } name={ studente.cognome + "-offerto" } type="checkbox" class="toggle toggle-primary" on:change={() => studente.interrogato = document.getElementById(studente.cognome + "-interrogato").checked}/>
                    </th>
                {:else}
                    <th>
                        <input id={ studente.cognome + "-offerto" } name={ studente.cognome + "-offerto" } type="checkbox" class="toggle toggle-primary" checked on:change={() => studente.interrogato = document.getElementById(studente.cognome + "-interrogato").checked}/>
                    </th>
                {/if}
            </tr>
        {/each}
    </tbody>
</table>