<script>
    export let locations;
    export let keywords;
</script>

<div class="alert-box">
    <div class="alert shadow-lg">
        {#if locations.length}
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
                <h3 class="font-bold">Resultados por ubicación</h3>
                <div class="text-xs">Localidades que coinciden en su búsqueda:
                    {#each locations as location}
                        <div class="badge badge-primary">{location}</div>
                    {/each}
                </div>
            </div>
        </div>
        {/if}
        {#if keywords.length}
        <div class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
                <h3 class="font-bold">Resultados por palabras clave</h3>
                <div class="text-xs">Palabras clave que coinciden en su búsqueda: 
                    {#each keywords as keyword}
                        <div class="badge badge-primary">{keyword}</div>
                    {/each}
                </div>
            </div>
        </div>
        {/if}
    </div>
</div>

<style>
    .alert-box {
        padding:1em;
    }
</style>