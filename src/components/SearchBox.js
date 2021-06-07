import React from 'react';
import lookup from 'country-code-lookup';

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

    const calcTime = (offset) => {
        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (60000*offset));

        return nd.toLocaleString("en-IN");
    }

    return (
        <div className='searchBox'>
            <input onChange={(event) => {
                setCity(event.target.value)
            }} 
            value={city}
            type="text" />
            <button onClick={() => {
                if (!city) return
                weather.setCity(city);
                weather.getAllWeather((err, data) => {
                    if (err) {
                        alert(err);
                        setTemp('');
                        setPlace('');
                        setFeelsLike('');
                        setCountry('');
                        setRegion('');
                        setHumidity('');
                        setTime('');
                    }
                    if (data){
                        console.log(data);
                        setTemp(data.main.temp);
                        setFeelsLike(data.main.feels_like);
                        setPlace(city);
                        setCountry(lookup.byIso(data.sys.country).country);
                        setRegion(lookup.byIso(data.sys.country).region);
                        setHumidity(data.main.humidity)
                        setTime(calcTime(data.timezone / 60));
                    } 
                    setCity('');
                });
                weather.getDescription((err, data) => {
                    if (err) {
                        alert(err);
                        setDescription('');
                    }
                    setDescription(data);
                });
            }}
            style={{margin: '5px'}}
            >Check</button>
        </div>
    )
}

export default SearchBox
