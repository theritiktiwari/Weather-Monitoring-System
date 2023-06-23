import Head from 'next/head'
import React from 'react'
import moment from "moment-timezone";
import TodaysWeather from "../Components/TodaysWeather";
import HourlyWeather from "../Components/HourlyWeather";

const Forecast = ({ siteName, city, hourlyWeather, weeklyWeather, timezone }) => {
    return (
        <>
            <Head>
                <title>{`Forecast | ${siteName}`}</title>
            </Head>
            <section className="container my-5">
                <h1 className='text-center fs-1 mb-4 text-uppercase fw-bold'><span className="text-primary">Forecasting</span> Data</h1>
                <div className="container">
                    <TodaysWeather
                        city={city}
                        weather={weeklyWeather[0]}
                        timezone={timezone}
                    />
                    <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
                </div>
            </section>
        </>
    )
}

export default Forecast

const getHourlyWeather = (hourlyData, timezone) => {
    const endOfDay = moment().tz(timezone) && moment().tz(timezone).endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);
    const todaysData = hourlyData && hourlyData.filter((data) => data.dt < eodTimeStamp);
    return todaysData;
};

export async function getServerSideProps(context) {
    const city = {
        id: 1264527,
        name: "Mambakkam, Chennai",
        state: "",
        country: "IN",
        coord: {
            lon: 80.10735,
            lat: 12.86475
        }
    };

    if (!city) {
        return {
            notFound: true,
        };
    }

    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.NEXT_PUBLIC_API_ID}&exclude=minutely&units=metric`);
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }

    const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);
    const weeklyWeather = data.daily;

    return {
        props: {
            city: city,
            timezone: data.timezone,
            currentWeather: data.current,
            hourlyWeather: hourlyWeather,
            weeklyWeather: weeklyWeather,
        }
    };
}