import React from "react";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";
import Home8 from "./Home8";
import './styles.css';

export default function Home() {
    return (
        <div className="home">
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
            <Home5 title="Starter Features for you"/>
            <Home6 />
            <Home7 />
            <Home8 title="Ready? Try it for free!" subtitle={<a href="/price" className="button button--link button--lg px-4 ms-md-2">
                See pricing
            </a>} />
        </div>
    );
}