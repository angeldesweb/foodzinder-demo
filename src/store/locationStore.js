import { writable } from 'svelte/store';
import { getLocation } from '../http-actions/location'

let initialAddress = {
    lat:0,
    lon:0,
    address:{
        city:'',
        country:'',
        country_code:'',
        county:'',
        state:'',
        suburb:'',
        postcode:''
    },
    errors:null
}

export const locationStore = () => {
    const { subscribe , update } = writable(initialAddress);
    return {
        subscribe,
        setCurrent: async ({lat,lon}) => {
            try {
                const data = await getLocation({lat,lon});
                update(store => (store = {...store,address:data.address,lat,lon}));
            } catch (error) {
                update(store => (store = {...store,errors:error}));
            }
        } 
    }
}