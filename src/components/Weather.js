import React from 'react';
import {useSelector} from "react-redux";


const Weather = () => {
const {message, country, city, temp, pressure, sunset} = useSelector(state => state.weather);


    return (
        <div className={'infoWeath'}>{
            !message && <div>
                <p>Location: {country}, {city}</p>
                <p>Temp: {temp}</p>
                <p>Pressure: {pressure}</p>
                <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>
            </div>
        }
        <p>{message}</p>
        </div>
    );
};

export default Weather;