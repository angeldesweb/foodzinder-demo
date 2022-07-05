<script>
    import { restaurants , menus } from '../temp-database/rests.json';
    import { filters , router} from '../store'
    import Header from '../lib/molecules/components/Header.svelte';
    import FlipCardsMenus from '../lib/molecules/components/FlipCardsMenus.svelte';
    import MapRest from '../lib/molecules/components/MapRest.svelte';


    $: if(!$filters.rest) {
        alert('No se encontró el nombre');
        router.navigate('home');
    }
    const restaurant = restaurants.find(item => item.name === $filters.rest);

    const dishes = menus.filter(menu => menu.restaurant.name === restaurant.name)
</script>

<Header/>

<div class="hero " style="background-image: url(https://placeimg.com/1000/800/arch);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">{restaurant.name}</h1>
            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <label for="my-modal" class="btn text-white btn-primary modal-button">ver mapa</label>
        </div>
    </div>
</div>
<div class="cards-box">
    {#each dishes as dish}
    <FlipCardsMenus action="Agregar" src={dish.cardimage} title={dish.name} sub=""/>
    {/each}
</div>


<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <div class="map">
        <MapRest lng={restaurant.longitude} lat={restaurant.latitude} />
    </div>
    <div class="modal-action">
      <label for="my-modal" class="btn">Cerrar</label>
    </div>
  </div>
</div>

<style>
    .hero {
        height:15rem;
    }
    .cards-box {
        display:grid;
        gap:1rem;
        grid-auto-rows: 22rem;
        grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
    }
    .map {
        height:15rem;
    }
</style>
