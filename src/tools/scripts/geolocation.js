export const saveLocation = ({coords}) => {
    const {latitude,longitude} = coords;
    return {lat:latitude,lon:longitude};
}