import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Card from '@/Components/Card';
import Link from 'next/link';

const Index = ({ siteName }) => {
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [gas, setGas] = useState(0);
    const [uv, setUV] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://api.thingspeak.com/channels/${process.env.NEXT_PUBLIC_CHANNEL_ID}/feeds.json?results=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setTemperature(parseFloat(data.feeds[0].field1).toFixed(2));
            setHumidity(parseFloat(data.feeds[0].field2).toFixed(2));
            setGas(parseFloat(data.feeds[0].field3).toFixed(2));
            setUV(parseFloat(data.feeds[0].field4).toFixed(2));
        }
        setInterval(() => {
            getData();
        }, 1000);
    }, []);

    return (
        <>
            <Head>
                <title>{`Monitor | ${siteName}`}</title>
            </Head>
            <div className='container my-5'>
                <h1 className='text-center fs-1 mb-4 text-uppercase fw-bold'><span className="text-primary">Monitoring</span> Data</h1>
                <div className="box d-flex justify-content-center align-items-center">
                    <Link href="/monitor/temperature" className='link'>
                        <Card title={"Temperature"} value={`${temperature} ºC`} margin={"m-5"} />
                    </Link>
                    <Link href="/monitor/humidity" className='link'>
                        <Card title={"Humidity"} value={`${humidity} g/m^3`} margin={"m-5"} />
                    </Link>
                </div>
                <div className="box d-flex justify-content-center align-items-center">
                    <Link href="/monitor/gas" className='link'>
                        <Card title={"Gas"} value={`${gas} ppm`} margin={"m-5"} />
                    </Link>
                    <Link href="/monitor/uv" className='link'>
                        <Card title={"UV"} value={`${uv} mW/cm^2`} margin={"m-5"} />
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Index