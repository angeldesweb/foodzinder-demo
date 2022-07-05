<Map accessToken="pk.eyJ1IjoiYW5nZWxkZXN3ZWIiLCJhIjoiY2wzejBkYXFxMDEyZzNjcjI0cjM2Mmx0eiJ9.3AuWLavDC-_6ngXFPvGSCg" bind:center  bind:zoom>
    <Marker bind:lat bind:lng />
</Map>
  
<script>
    import { Map , Marker } from '@beyonk/svelte-mapbox'
    $: zoom = 14;
    $: console.log(zoom);
    export let lat;
    export let lng;

    let center = [lng,lat];
</script>