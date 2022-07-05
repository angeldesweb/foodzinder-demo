<script>
    import { onMount } from 'svelte';
    import { filters , router } from '../../../store'
    import { restaurants } from '../../../temp-database/rests.json';
        export let alt = 'No image found';
        export let title = 'Título';
        export let content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        export let action = 'Menú';
        export let sub; 

        const getRests = async () => {
            try {
                let current = restaurants.find(i => i.name === title);
                return current;
            } catch (error) {
                console.log(error)
            }
        }
    
        let promise = getRests();
        
        const toMenu = (e) => {
            filters.addFilters({rest:e.target.id});
            router.navigate('menus')
        }

        onMount(async() => await getRests());
    </script>
    
    {#await promise then rest}
    <div class="flip-card">
        <div class="face front">
            <img 
            src={rest.cardimage ? rest.cardimage : 'https://th.bing.com/th?id=OIF.rAY%2b%2fgb3zUV064nRwIFM3w&pid=ImgDet&rs=1'} 
            alt={alt}>
            <h3>{title} <small class="text-primary">{sub}</small></h3>
        </div>
        <div class="face back bg-secondary">
            <h3 class="text-primary">{title}</h3>
            <p>{content}</p>
            <div class="linker">
                <a 
                    class="link link-hover link-primary"
                    id={title}
                    on:click|preventDefault={toMenu}
                    href={null} 
                >{action}</a>
            </div>
        </div>
    </div>
    {/await}
    
    <style>
        .flip-card {
            position:relative;
            width:300px;
            height:350px;
            margin:20px;
        }
    
        .flip-card .face {
            position:absolute;
            width:100%;
            height:100%;
            backface-visibility:hidden;
            border-radius:10px;
            overflow:hidden;
            transition:.5s;
        }
    
        .flip-card .front {
            transform:perspective(600px) rotateY(0deg);
            box-shadow: 10px 10px 36px 0px rgba(194,194,194,0.75);
        }
    
        .flip-card .front img {
            position:absolute;
            width:100%;
            height:100%;
            object-fit: cover;
        }
    
        .flip-card .front h3 {
            position:absolute;
            bottom:0;
            width:100%;
            height:45px;
            line-height:45px;
            color:#fff;
            background:rgba(0, 0, 0, 0.589);
            text-align:center;
            font-weight:bolder;
        }
    
        .flip-card .back {
            transform: perspective(600px) rotateY(180deg);
            padding:15px;
            color:#f3f3f3;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            text-align:center;
            box-shadow: 10px 10px 36px 0px rgba(194,194,194,0.75);
        }
    
        .flip-card .back .linker {
            border-top:solid 1px #f3f3f3;
            height:50px;
            line-height:50px;
        }
    
        .flip-card .back .linker  a {
            color:#f3f3f3;
        }
    
        .flip-card .back h3 {
            font-size:30px;
            margin-top:20px;
            letter-spacing:2px;
        }
    
        .flip-card .back p {
            letter-spacing:1px;
        }
    
        .flip-card:hover .front{
            transform: perspective(600px) rotateY(180deg)
        }
    
        .flip-card:hover .back{ 
            transform: perspective(600px) rotateY(360deg)
        }
    </style>