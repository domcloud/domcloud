import React from "react";
import FaMapMarker from '@fortawesome/fontawesome-free/svgs/solid/map-marker-alt.svg';

export default function Home6() {
    return (<div className="container mb-5 map">
        <div className="card">
            <div className="card__body">
                <h2 className="text--center">Multiple Server Locations</h2>
                <p className="text--center">Serve website closest to the location of your audience</p>
                <div style={{ position: 'relative' }}>
                    <img src="/assets/feat/worldmap.png" className="w-100" alt="" loading="lazy"/>
                    <a href="#sg1" style={{
                        position: 'absolute',
                        top: '57.3%',
                        left: '75.8%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)'
                    }} >
                        <FaMapMarker/>
                    </a>
                    <a href="#ny1" style={{
                        position: 'absolute',
                        top: '31.5%',
                        left: '27.8%',
                        width: '25px',
                        transform: 'translate(-11px, -45px)',
                    }} >
                        <FaMapMarker />
                    </a>
                    <a href="#fr1" style={{
                        position: 'absolute',
                        top: '28.4%',
                        left: '47.4%',
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