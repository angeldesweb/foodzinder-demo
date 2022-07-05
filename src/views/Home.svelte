<script>
    import HomeSearchBox from "../lib/molecules/components/HomeSearchBox.svelte";
    import HomeDishCarousel from "../lib/molecules/components/HomeDishCarousel.svelte";
    import HomeRegisterCard from "../lib/molecules/components/HomeRegisterCard.svelte";
    import Header from "../lib/molecules/components/Header.svelte";
    import { location } from '../store';


    const saveLocation = ({coords}) => {
        const {latitude,longitude} = coords;
        location.setCurrent({lat:latitude,lon:longitude});
    };
    
    navigator
    .geolocation
    .getCurrentPosition(saveLocation);
</script>

<div class="grid-home">
    <div class="item header">
        <Header/>
    </div>
    <div class="item first">
        <div class="sub-item">
            <HomeSearchBox/>
        </div>
        <div class="sub-item">
            <HomeDishCarousel/>
        </div>
    </div>
    <div class="item second">
        <div class="right">
            <HomeRegisterCard/>
        </div>
    </div>
    <div class="item footer">footer</div>
</div>


<style>
    .grid-home {
        display: grid;
        min-height:100vh;
    }
    .first {
        display:grid;
        gap:1rem;
        grid-template-columns:repeat(auto-fit,minmax(min(100%,25rem),1fr));
    }
    .second {
        display:flex;
        justify-content: flex-end;
        background-image: url('../assets/images/bg-bottom.jpg');
        background-position: center center;
        background-size: cover;
    }
    .sub-item {
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .right {
        padding:1em;
        margin:0;
        width:min(35rem,100%);
        background-color:rgba(0, 0, 0, 0.529);
        display:grid;
        place-content: center;
    }
    .footer {
        border:blue solid 1px;
    }

</style>