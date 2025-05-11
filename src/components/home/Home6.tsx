import React from "react";
import FaHdd from '@fortawesome/fontawesome-free/svgs/solid/globe.svg';
import FaTime from '@fortawesome/fontawesome-free/svgs/solid/link.svg';
import FaSignal from '@fortawesome/fontawesome-free/svgs/solid/bolt-lightning.svg';
import FaLock from '@fortawesome/fontawesome-free/svgs/solid/tag.svg';
import FaAtlas from '@fortawesome/fontawesome-free/svgs/solid/file-zipper.svg';
import FaStopwatch from '@fortawesome/fontawesome-free/svgs/solid/location-pin-lock.svg';

export default function Home6() {
    return (
        <div className="container px-4 py-5 text-center">
            <h2 className="pb-2 border-bottom text--center">
                Speed? We got you covered ⚡
            </h2>
            <div className="row g-4 pt-5 row-cols-1 row-cols-lg-2">
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaHdd />
                    </div>
                    <h2><a href="/docs/intro/compare-server">Multiple Server Regions</a></h2>
                    <p>All the globe should have ping time &lt;100ms with our closest server</p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaSignal />
                    </div>
                    <h2><a href="/docs/deployment/php#php-opcache-settings">Opcache</a> + 
                    <a href="/docs/deployment/php#php-opcache-settings">Valkey</a> 
                    Valkey Cache
                    </h2>
                    <p>B</p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaTime />
                    </div>
                    <h2>HTTP 3.0 + QUIC (Opt In)</h2>
                    <p>Optional extra </p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaStopwatch />
                    </div>
                    <h2>TLS 1.3 with 1-RTT Handshake</h2>
                    <p>Faster and Stronger HTTPS encryption compared to TLS 1.2</p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaLock />
                    </div>
                    <h2>Automatic Media Caching and Gzip Delivery</h2>
                    <p>Optimized caching deliveries by default for static files.</p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaAtlas />
                    </div>
                    <h2>Automatic GZip Compression Setup</h2>
                    <p>On-the-fly Gzip Compression for many static text files.</p>
                </div>
            </div>
        </div>
    )
}