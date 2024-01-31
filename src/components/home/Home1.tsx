import React from "react";
import ThemedImage from '@theme/ThemedImage';
import { GitHub, Google } from "./Icon";

export default function Home1() {
    return (
        <div className="px-4 pt-5 mb-5 text--center border-bottom bg">

            <h1 className="display-4 fw-bold">
                Classic Web Hosting Made Easy &nbsp;
                <span className="badge badge--danger">Beta</span>
            </h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Modern hosting platform but for the old school.
                </p>
                <div
                    className="d-grid gap-2 d-sm-flex justify-content-sm-center align-items-center mb-5"
                >
                    <span>Starts for free: </span>
                    <a
                        rel="nofollow"
                        href="https://my.domcloud.co/login?with=google"
                        className="p-2 mx-2 button button--secondary d-flex align-items-center shadow--lw"
                    >
                        <Google />
                        <span className="ms-2">Google</span>
                    </a>
                    <a
                        rel="nofollow"
                        href="https://my.domcloud.co/login?with=github"
                        className="p-2 mx-2 button button--secondary d-flex align-items-center shadow--lw"
                    >
                       <GitHub />
                        <span className="ms-2">GitHub</span>
                    </a>
                </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                <div className="container px-5">
                    <ThemedImage
                        sources={{
                            dark: "/assets/ss/dash-b.png",
                            light: "/assets/ss/dash-w.png"
                        }}
                        alt=""
                        className="img-fluid border rounded-3 shadow--md mb-4"
                        width="700"
                        height="500"
                    />
                </div>
            </div>
        </div>
    );
}
