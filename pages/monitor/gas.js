import React from 'react';
import Head from 'next/head';

const Gas = ({ siteName }) => {
    return (
        <>
            <Head>
                <title>{`Gas | ${siteName}`}</title>
            </Head>
            <div className='container my-5'>
                <h1 className='text-center fs-1 mb-4 text-uppercase fw-bold'><span className="text-primary">Visualizing</span> Gas</h1>
                <hr />
                <div className="d-flex justify-content-center align-items center my-5">
                    <iframe width="468" height="260" style={{ border: "none", boxShadow: "1px 1px 10px 0px black", fontFamily: "Verdana" }} src={`https://thingspeak.com/channels/${process.env.NEXT_PUBLIC_CHANNEL_ID}/charts/3?bgcolor=FFF&color=000&dynamic=true&api_key=${process.env.NEXT_PUBLIC_API_KEY}&results=60&type=line&update=15`}></iframe>
                </div>
            </div>

        </>
    )
}

export default Gas