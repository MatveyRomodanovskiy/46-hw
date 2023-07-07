import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getWeather} from "../actions/weatherActions";

const FormManaged = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const handleClick =() =>{
        dispatch(getWeather(city));
        setCity('');
    }

    return (
        <div>
            <input
                type={'text'}
                placeholder={'City name'}
                onChange={e => setCity(e.target.value)}
                value={city}
            />
            <button onClick={handleClick}>Get weather</button>
        </div>
    );

}

export default FormManaged;