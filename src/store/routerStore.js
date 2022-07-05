import { writable } from 'svelte/store';

export const routerStore = () => {
    const { subscribe , set } = writable('home');
    return {
        subscribe,
        navigate:(v) => set(v)
    }
}