import { restaurants , menus } from '../temp-database/rests.json';

export const fetchMenus = async () => {
    try {
        return menus;
    } catch (error) {
        console.log(error);
    }
}

export const fetchRestaurants = async () => {
    try {
        const places = restaurants;
        return places;
    } catch (error) {
        console.log(error);
    }
}