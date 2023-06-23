import React from 'react'
import moment from 'moment-timezone';
import Image from 'next/image';

const TodaysWeather = ({ city, weather, timezone }) => {
    return (
        <>
            <div className="today container glass-effect p-4 rounded d-flex justify-content-between align-items-center" style={{width: "70%"}}>
                <div className="left-content">
                    <h1>{city.name} ({city.country})</h1>

                    <h2><span>{weather.temp.max.toFixed(0)}&deg;C</span> <span>{weather.temp.min.toFixed(0)}&deg;C</span></h2>

                    <div className="sun-times">
                        <div>
                            <span>Sunrise - </span>
                            <span>
                                {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                            </span>
                        </div>

                        <div>
                            <span>Sunset - </span>
                            <span>
                                {moment.unix(weather.sunset).tz(timezone).format("LT")}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="right-content text-capitalize">
                    <div className="icon">
                        <div>
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="Weather Icon"
                                layout="fill"
                            />
                        </div>
                    </div>

                    <h5>{weather.weather[0].description}</h5>
                </div>
            </div>
        </>
    )
}

export default TodaysWeather