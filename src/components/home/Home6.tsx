import React from "react";
import FaMapMarker from '@fortawesome/fontawesome-free/svgs/solid/map-pin.svg';

export default function Home6() {
    return (<div className="container mb-5 map">
        <div className="card">
            <div className="card__body">
                <h2 className="text--center">Global Server Locations</h2>
                <p className="text--center">Pick one closest to the location of your audience</p>
                <div style={{ position: 'relative' }}>
                    <img src="/assets/feat/worldmap.png" className="w-100" alt="" loading="lazy"/>
                    <a href="#sga" style={{
                        position: 'absolute',
                        top: '57.3%',
                        left: '75.8%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)'
                    }} >
                        <FaMapMarker/>
                    </a>
                    <a href="#nyc" style={{
                        position: 'absolute',
                        top: '31.5%',
                        left: '27.8%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)',
                    }} >
                        <FaMapMarker />
                    </a>
                    <a href="#fra" style={{
                        position: 'absolute',
                        top: '25.8%',
                        left: '49.3%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)',
                    }} >
                        <FaMapMarker />
                    </a>
                    <a href="#osa" style={{
                        position: 'absolute',
                        top: '35.1%',
                        left: '82.9%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)',
                    }} >
                        <FaMapMarker />
                    </a>
                    <a href="#blr" style={{
                        position: 'absolute',
                        top: '49.2%',
                        left: '68.1%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)',
                    }} >
                        <FaMapMarker />
                    </a>
                    <a href="#sao" style={{
                        position: 'absolute',
                        top: '71.5%',
                        left: '34.2%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)',
                    }} >
                        <FaMapMarker />
                    </a>
                </div>
                <p className="text--center"><a href="https://github.com/domcloud/domcloud/issues/22" target="_blank" rel="noopener noreferrer">Psst... Want more location?</a></p>
            </div>
        </div>
    </div>)
}