<script>
    import facebook from '../../../assets/svg/facebook_icon.svg';
    import insta from '../../../assets/svg/instagram_icon.svg';
</script>

<footer class="pb-10 bg-secondary">
    <div class="box">
        <div class="content left mb-2">
            <div class="media">
                <img src={facebook} alt="Facebook">
                <img src={insta} alt="Instagram">
            </div>
            <div class="list text-white ml-2 flex wrap">
                <p>
                    <a href={null} class="text-white link link-hover">Términos y condiciones </a> |
                    <a href={null} class="text-white link link-hover"> Políticas de privacidad </a> |
                    <a href={null} class="text-white link link-hover"> 2022 © Food Zinder </a>
                </p>
            </div>
        </div>
        <div class="content"></div>
    </div>
    <div class="divider bg-100"></div>
</footer>

<style>
    footer {
        position:relative;
        margin-top:0;
    }
    .box {
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap:wrap;
        height:10rem;
    }
    .content {
        height:100%;;
    }

    .left {
        display:flex;
        height:100%;
        justify-content:flex-end;
        flex-direction:column;
    }
    img {
        width:2rem;
        display:inline;
        margin: 0 .5rem;
    }
</style>