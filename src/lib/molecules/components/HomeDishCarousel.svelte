<script>
    import { fly } from 'svelte/transition'
    import dish1 from '../../../assets/images/dish.png';
    import dish2 from '../../../assets/images/dish1.png';
    import dish3 from '../../../assets/images/dish2.png';

    const images = [dish1,dish2,dish3];
    $: active = 0;
    const changeSlide = () => {
        active === 0 ? active++ : active === 2 ? active = 0 : active++; 
    }

    setInterval(() => {changeSlide()},8000)
</script>

<div class="carousel">
    {#key active}
        <img in:fly={{y:-20,duration:2000}} src={images[active]} alt="dish" />
    {/key}
</div>

<style>
    img {
        width:100%;
    }
    .carousel {
        display:flex;
        justify-content: center;
        align-items:center;
        width:min(30rem,100%);
    }
</style>