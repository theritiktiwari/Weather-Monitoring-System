import React from 'react';
import moment from 'moment-timezone';
import Image from 'next/image';

const HourlyWeather = ({ hourlyWeather, timezone }) => {
    return (
        <>
            <div className="hourly mt-5 container glass-effect py-4 rounded d-flex justify-content-between align-items-center" style={{ width: "70%", overflow: "scroll" }}>
                {hourlyWeather.length > 0 && hourlyWeather.map((weather, index) => (
                    <div className='box d-flex flex-column justify-content-center align-items-center' key={weather.dt}>
                        <span>{weather.temp.toFixed(0)}&deg;C</span>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                            width="100"
                            height="100" />
                        <span className={`time ${index == 0 ? 'time-now' : ""}`}>
                            {index == 0 ? "NOW" : moment.unix(weather.dt).tz(timezone).format("LT")}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HourlyWeather