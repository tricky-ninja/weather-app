import React, {useState} from 'react';
import lookup from 'country-code-lookup';
import { FaSearch } from "react-icons/fa";
import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'

function SearchBox({
    setCity,
    weather,
    city,
    setTemp,
    setPlace,
    setDescription,
    setFeelsLike,
    setCountry,
    setRegion,
    setHumidity,
    setTime
}) {

    const [alertId, setAlertId] = useState('');



    const calcTime = (offset) => {
        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (60000*offset));

        return nd.toLocaleString("en-IN");
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!city) return
                    weather.setCity(city);
                    weather.setUnits('metric');
                    weather.getAllWeather((err, data) => {
                        if (err) {
                            const id = StatusAlertService.showError(err.message);
                            setAlertId({id})
                            setTemp('');
                            setPlace('');
                            setFeelsLike('');
                            setCountry('');
                            setRegion('');
                            setHumidity('');
                            setTime('');
                            setDescription('');
                        }
                        if (data){
                            console.log(data);
                            setTemp(data.main.temp);
                            setFeelsLike(data.main.feels_like);
                            setPlace(data.name);
                            setCountry(lookup.byIso(data.sys.country).country);
                            setRegion(lookup.byIso(data.sys.country).region);
                            setHumidity(data.main.humidity)
                            setTime(calcTime(data.timezone / 60));
                        } 
                        setCity('');
                    });
                    weather.getDescription((err, data) => {
                        if (err) {
                            const id = StatusAlertService.showError(err.message);
                            setAlertId({id})
                        }
                        setDescription(data);
                    });
    }

    return (
        <div className='searchBox'>
            <StatusAlert/>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input onChange={(event) => {
                    setCity(event.target.value)
                }} 
                value={city}
                type="text" placeholder='Search a city' />
                <button style={{margin: '5px'}} type='submit'><FaSearch className='searchIcon' /></button>
            </form>
        </div>
    )
}

export default SearchBox
