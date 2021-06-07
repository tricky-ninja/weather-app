import React, {useState} from 'react';
import SearchBox from './SearchBox';

function Weather({
    setCity,
    weather,
    city
}) {

    const [temp, setTemp] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');
    const [feelsLike, setFeelsLike] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [humidity, setHumidity] = useState('');
    const [time, setTime] = useState('');

    return (
        <div className='weather-box'>
            <SearchBox
                setCity={setCity} 
                weather={weather}
                city={city}
                setTemp={setTemp}
                setPlace={setPlace}
                setDescription={setDescription}
                setFeelsLike={setFeelsLike}
                setCountry={setCountry}
                setRegion={setRegion}
                setHumidity={setHumidity}
                setTime={setTime}
            />
            <div className="data">
                <h4>{place ? 'City: ' + place : ''}</h4>
                <h4>{country ? 'Country : ' + country : ''}</h4> 
                <h4>{region ? 'Region : ' + region : ''}</h4> 
                <h4>{time ? 'Time: ' + time : ''}</h4>
                <h4>{description ? 'Weather: ' + description : ''}</h4>
                <h4>{temp ? 'Temprature: ' + temp : ''}</h4> 
                <h4>{feelsLike ? 'Feels like: ' + feelsLike : ''}</h4>
                <h4>{humidity ? 'Humidity: ' + humidity : ''}</h4>
            </div>
        </div>
    )
}

export default Weather
