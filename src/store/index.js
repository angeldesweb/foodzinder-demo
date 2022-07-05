import { filtersStore } from "./filtersStore";
import { routerStore } from "./routerStore";
import { locationStore } from "./locationStore";

export const filters = filtersStore();
export const router = routerStore();
export const location = locationStore();