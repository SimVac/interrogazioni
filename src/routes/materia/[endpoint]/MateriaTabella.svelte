<script>
    export let elenco;
</script>

<table class="table">
<thead>
    <tr>
    <th>Nome</th>
    <th>Cognome</th>
    </tr>
</thead>
<tbody>
    {#each elenco as studente}
        {#if !studente.interrogato}
            <tr>
                <th>{ studente.nome }</th>
                <th>{ studente.cognome }</th>
            </tr>
        {/if}
    {/each}
</tbody>
</table>