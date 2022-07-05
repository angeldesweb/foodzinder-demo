<script>
    import { filters , location , router } from '../../../store';
    let dish = '';
    let city = '';
    
    const setNearest = () => {
        if(!$location.address.city) alert('Debe permitir conocer la ubicación para usar esta función')
        city = $location.address.city;
    };

    const searchPlaces = () => {
        filters.addFilters({city,dish});
        router.navigate('restaurants');
    }
</script>

<div class="card bg-base-100 shadow-xl mt-1">
    <div class="card-body">
        <input bind:value={dish} type="text" placeholder="Deseo comer..." class="input input-bordered w-full" />
        <input bind:value={city} type="text" placeholder="En la ciudad de..." class="input input-bordered w-full" />
        <a href={null} on:click={setNearest} class="link-hover">Cerca de mi</a>
        <div class="card-actions justify-end">
            <button on:click={searchPlaces} class="btn btn-primary text-white">Buscar</button>
        </div>
    </div>
</div>

<style>
    .card {
        width:min(25rem,100%);
        margin:1em;
    }
</style>