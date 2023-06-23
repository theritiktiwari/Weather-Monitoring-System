import React, { useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ siteName, router }) => {
    const addClass = (sel, className) => {
        sel.classList.add(className);
    }
    const removeClass = (sel, className) => {
        sel.classList.remove(className);
    }
    useEffect(() => {
        const home = document.querySelector('#home');
        const monitor = document.querySelector('#monitor');
        const forecast = document.querySelector('#forecast');

        if (router.pathname === "/") {
            addClass(home, 'active');
            removeClass(monitor, 'active');
            removeClass(forecast, 'active');
        }
        if (router.pathname === "/monitor") {
            addClass(monitor, 'active');
            removeClass(home, 'active');
            removeClass(forecast, 'active');
        }
        if (router.pathname === "/forecast") {
            addClass(forecast, 'active');
            removeClass(home, 'active');
            removeClass(monitor, 'active');
        }
    }, [router]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark glass-effect fw-bold">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">{siteName}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" id='home' aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='monitor' href="/monitor">Monitor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='forecast' href="/forecast">Forecast</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar