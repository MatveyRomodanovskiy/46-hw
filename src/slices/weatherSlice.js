import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    city: '',
    country: '',
    temp: '',
    sunset: '',
    pressure: '',
    message: 'Enter city name'
}
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        putWeather(state, action) {
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.temp = action.payload.temp;
            state.sunset = action.payload.sunset;
            state.pressure = action.payload.pressure;
            state.message = action.payload.message
        },
        pending(state) {
            state.message = 'Pending...';
        }
    }
})

export const {putWeather, pending} = weatherSlice.actions;
export default weatherSlice.reducer;