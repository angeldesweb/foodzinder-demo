<script>
    import Header from "../lib/molecules/components/Header.svelte";
    import { filters } from '../store';
    import { fetchMenus , fetchRestaurants } from '../http-actions/api';
    import { filterMenus } from '../tools/scripts/filters';
    import { onMount } from "svelte";
    import ResultAlert from "../lib/molecules/components/ResultAlert.svelte";
    import FlipCardsRest from "../lib/molecules/components/FlipCardsRest.svelte";

    $: restaurants = []
    const loadByDish = async () => {
        try {
            let response;
            let menus = await fetchMenus();
            let places = await fetchRestaurants();
            restaurants = places;
            response = await filterMenus($filters.city,$filters.dish,menus);
            console.log(response)
            return response;
        } catch (error) {
            throw error;
        }
    }

    let promise = loadByDish();

    onMount(async () => promise = await loadByDish());
</script>

<Header/>


{#await promise}
    <h1>loading...</h1>
{:then results}
{#if results.hasLocated || results.hasData}
    <ResultAlert 
        locations={results.locations ? results.locations : false}
        keywords={results.keywords ? results.keywords : false}
    />
    <div class="cards-box">
        {#each Object.entries(results.restaurants) as result}
            {#if !results.hasData}
            <FlipCardsRest 
                title={result[0]}
                sub=""
            />
            {:else}
            <FlipCardsRest 
                title={result[0]} 
                sub={result[1] === 1 ? `${result[1]} coincidencia` : `${result[1]} coincidencias`} 
            />
            {/if}
        {/each}
    </div>
    {:else}
    <div class="cards-box">
        {#each restaurants as result}
        <FlipCardsRest
            title={result.name} 
            sub=""
        />
        {/each}
    </div>
{/if}
{/await}


<style>
    .cards-box {
        display:grid;
        gap:1rem;
        grid-auto-rows: 22rem;
        grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
    }
</style>