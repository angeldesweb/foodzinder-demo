import { writable } from 'svelte/store';

let initialValues = {
    city:'',
    dish:'',
    rest:''
}

export const filtersStore = () => {
    const { subscribe , update } = writable(initialValues);
    return {
        subscribe,
        addFilters:(args) => update(store => (store = {...store,...args})) 
    }
}