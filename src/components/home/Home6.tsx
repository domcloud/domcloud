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
                Speed and Convenience? We got you covered ⚡
            </h2>
            <div className="row g-4 pt-5 row-cols-1 row-cols-lg-2">
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaHdd />
                    </div>
                    <h2>Multiple <a href="/docs/intro/compare-server">Server Regions</a></h2>
                    <p>All the globe should have ping time &lt;100ms with our closest server</p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                    <FaTime />
                    </div>
                    <h2><a href="/docs/deployment/php#php-opcache-settings">Opcache</a> + 
                    <a href="/docs/deployment/php#php-opcache-settings">Valkey</a> Cache
                    </h2>
                    <p>
                        PHP caching and other stuff to memory? We got you covered
                    </p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                    <FaSignal />
                    </div>
                    <h2><a href="/docs/deployment/nginx#tlsv13">TLSv1.3</a> + Opt in <a href="/docs/deployment/nginx#http-3-and-quic">HTTP 3.0 QUIC</a></h2>
                    <p>You will get a high <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring" target="_blank">lighthouse performance score</a> out of the box</p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaLock />
                    </div>
                    <h2>Automatic <a href="/docs/deployment/nginx#static-file-caching">Media Caching</a> and <a href="/docs/deployment/nginx#gzip-encoding">Gzip Delivery</a> </h2>
                    <p>Fast images and media deliveries by default to save bandwidth.</p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaStopwatch />
                    </div>
                    <h2>
                        Rich <a href="/docs/features/editor">Online Developer Tooling</a> 
                    </h2>
                    <p>
                        You can code in production only with your smartphone
                    </p>
                </div>
                <div className="feature performance col">
                    <div className="feature-icon badge">
                        <FaSignal />
                    </div>
                    <h2>
                        Fully <a href="https://github.com/domcloud/container" target="_blank">Open Source</a> 
                    </h2>
                    <p>
                        Don't like our cloud offering? No worry! Just <a href="/docs/intro/self-hosting">BYOC (Bring your own cloud)</a>
                    </p>
                </div>
            </div>
        </div>
    )
}