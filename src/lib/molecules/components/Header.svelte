<script>
    import { router } from '../../../store/';
    import logo from '../../../assets/svg/logo.svg';

    const toHome = () => {
        router.navigate('home')
    }
</script>

<header on:click={toHome}>
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">
                <img style:height="1.5rem" src={logo} alt="logo">
            </h2>
        </div>
    </div>
</header>

<style>
    header {
        width:100%;
        padding:1em;
    }
</style>