import React from "react";

export default function Home6() {
    return (<div className="container my-5">
        <div className="card">
            <div className="card__body">
                <h3 className="text-center">Multi Location Server</h3>
                <p className="text-center">Choose closest to the location of your audience</p>
                <div style={{ position: 'relative' }}>
                    <img src="/assets/feat/worldmap.png" className="w-100" alt="" />
                    <a href="#sg1" style={{
                        position: 'absolute',
                        top: '57.3%',
                        left: '75.8%',
                        fontSize: '30px',
                        transform: 'translate(-11px, -45px)'
                    }} >
                        <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <a href="#ny1" style={{
                        position: 'absolute',
                        top: '31.5 %',
                        left: '27.8 %',
                        fontSize: '30px',
                        transform: 'translate(-11px, -45px)',
                    }} >
                        <i className="fas fa-map-marker-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>)
}