import {api_key, base_url} from "../utils/constants";
import {putWeather, pending} from "../slices/weatherSlice";

export const getWeather = cityForm => {
    return (dispatch) => {
     dispatch(pending());
        fetch(`${base_url}?q=${cityForm}&appid=${api_key}&units=metric`)
        .then(response =>response.json())
        .then( data => dispatch(putWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                sunset: data.sys.sunset,
                pressure: data.main.pressure,
                message: ''
            })))
        .catch (e => dispatch(putWeather({message:'Enter correct city name'})));
    }
}