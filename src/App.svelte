<script>
    import Home from "./views/Home.svelte";
    import Restaurants from "./views/Restaurants.svelte";
    import { router } from './store/' 
    import Menus from "./views/Menus.svelte";

    const routes = {
        home:Home,
        restaurants:Restaurants,
        menus:Menus
    }
</script>

<div class="app">
    <svelte:component this={routes[$router]} />
</div>
