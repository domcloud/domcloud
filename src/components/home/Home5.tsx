import React from "react";
import FaHdd from '@fortawesome/fontawesome-free/svgs/solid/hard-drive.svg';
import FaTime from '@fortawesome/fontawesome-free/svgs/solid/business-time.svg';
import FaSignal from '@fortawesome/fontawesome-free/svgs/solid/signal.svg';
import FaLock from '@fortawesome/fontawesome-free/svgs/solid/lock.svg';
import FaAtlas from '@fortawesome/fontawesome-free/svgs/solid/book-atlas.svg';
import FaStopwatch from '@fortawesome/fontawesome-free/svgs/solid/stopwatch.svg';

export default function Home5({ title }) {
    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom text--center">
                {title} <span className="badge badge--primary">it's 100% free</span>
            </h2>
            <div className="row g-4 pt-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaHdd />
                    </div>
                    <h2>Free Storage</h2>
                    <p>1.5 GB of storage free for up to 3 websites.</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaSignal />
                    </div>
                    <h2>Free Network Limit</h2>
                    <p>2GB of monthly free outbound data network.</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaTime />
                    </div>
                    <h2>Free Forever</h2>
                    <p>No trial limit as long as you keep using it</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaStopwatch />
                    </div>
                    <h2>Quick Setup</h2>
                    <p>It only takes minutes to deploy your website!</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaLock />
                    </div>
                    <h2>Built-in Security</h2>
                    <p>
                        Built-in HTTPS, Firewall and Bot Protection.
                    </p>
                </div>
                <div className="feature col">
                    <div className="feature-icon badge badge--primary">
                        <FaAtlas />
                    </div>
                    <h2>Custom Domain</h2>
                    <p>No cost to set up a custom domain.</p>
                </div>
            </div>
            <p className="text--center pb-5 pt-3">
                <a href="/docs/intro/free-plan" className="button button--link button--lg px-4 me-md-2">
                    Read more about the free plan
                </a>
            </p>
        </div>
    )
}