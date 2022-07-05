//Limpia duplicados en arreglos
const cleanMatches = (obj) => {
    return [...new Set(obj)]
};
//Devuelve true si las expresiones incluyen con el input dado
const compare = (text,input) => {
    return text.toLowerCase().includes(input.toLowerCase())
};
//Devuelve un objeto con la clave y sus coincidencias
const getByKey = (key,arr,cb) => {
    let copy = arr.filter(cb);
    copy.map(i => i.index = key);
    return copy;
}
//Encontrar por keywords
const findByKeyword = (input,arr) => {
    //Listar todos los keywords
    const keys = cleanMatches(arr.map(menu => menu.keywords).flat());
    //Comparar los que coinciden con el input
    const keysInMatch = keys.filter(key => compare(key,input));
    //Obtiene los resultados con cada keyword
    const arrByKey = keysInMatch
    .map(key => getByKey(key,arr,i => i.keywords.includes(key))) 
    //Retornando resultados
    return {results:arrByKey.flat(),keywords:keysInMatch};
};  
//Encontrar coincidencias
const searchPlaces = (text,arr) => {
    const {results,keywords} = findByKeyword(text,arr);
  	const dishes = results
    //Objeto a retornar
    let restaurants = {};
    dishes.forEach(item => {
      restaurants[item.restaurant.name] ? 
      restaurants[item.restaurant.name] +=1 
      : restaurants[item.restaurant.name] = 1;
    })
    return {
      restaurants,
      dishes,
      keywords,
      hasData:dishes.length === 0 ? false: true
    };
};

const searchBylocations = (text,arr) => {
	const valids = arr.filter(item => compare(item.restaurant.city,text));
    return {
        bylocation:valids.length === 0 ? false : true,
        results:valids
    };
};

//FILTER FUNCTION
export const filterMenus = (location,keyword,arr) => {
    let data;
    if(keyword && location) {
        const { results , bylocation } = searchBylocations(location,arr);
        data = searchPlaces(keyword,results);
        data.hasLocated = bylocation;
        if(bylocation){
            let locations = results.map(i => i.restaurant.city);
            data.locations = [...new Set(locations)];
        }
    }else if(location && !keyword){
        let { results , bylocation } = searchBylocations(keyword,arr);
        data = {hasLocated:bylocation,locations:[],restaurants:[],dishes:results};
        results.forEach(item => {
            data.restaurants[item.restaurant.name] ? 
            data.restaurants[item.restaurant.name] +=1 
            : data.restaurants[item.restaurant.name] = 1;
        })
        if(bylocation){
            let locations = results.map(i => i.restaurant.city);
            data.locations = [...new Set(locations)];
        }
    }else if(!location && keyword){
        data = searchPlaces(keyword,arr);
    }else{
        data = arr 
    }
    return data;
};