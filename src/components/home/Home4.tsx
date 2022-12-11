import React from "react";
import ThemedImage from '@theme/ThemedImage';

export default function Home4() {
    return (

        <>
            <div className="my-5">
                <div
                    className="row g-0 p-4  align-items-center shadow--md flex-md-row-reverse"
                >
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">
                            Complete control over your server.
                        </h2>
                        <p className="lead pe-5">
                            No other hosting provider gives you this much control over your website.<br />
                            We give you non-sudo SSH access to your websites for free.<br />
                            Basic linux tools are available, of course.
                        </p>
                        <div
                            className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
                        >
                            <a href="/docs/features/service" className="button button--link button--lg px-4 me-md-2">
                                Read documentation
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <ThemedImage
                            sources={{
                                dark: "/assets/ss/vscode-ssh-b.png",
                                light: "/assets/ss/vscode-ssh-w.png"
                            }}
                            alt=""
                            className="rounded-lg-3"
                            height="480"
                        />
                    </div>
                </div>
            </div>


            <div className="my-5">
                <div className="row g-0 p-4  align-items-center shadow--md">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">Your personal development server.</h2>
                        <p className="lead">
                            Use our web-based File Manager, Database Explorer and SSH Terminal.<br />
                            Code everywhere on the go with VS Code via Remote SSH Access.<br />
                            HMR works out of the box across the internet too.
                        </p>
                        <div
                            className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
                        >
                            <a href="/docs/features/service#vscode-ssh-remote" className="button button--link button--lg px-4 me-md-2">
                                Read documentation
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <img
                            className="rounded-lg-3"
                            src="https://via.placeholder.com/600x400/cccccc/969696.png?text=TODO"
                            alt=""
                            width="720"
                        />
                    </div>
                </div>
            </div>

            <div className="my-5">
                <div
                    className="row g-0 p-4  align-items-center shadow--md flex-md-row-reverse"
                >
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">
                            Mix and Match
                        </h2>
                        <p className="lead pe-5">
                            We grant you access to the most powerful web proxy on the planet, NginX.<br />
                            With little patience, You can even mix two separate websites into one domain.
                        </p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <img
                            className="rounded-lg-3"
                            src="https://via.placeholder.com/600x400/cccccc/969696.png?text=TODO"
                            alt=""
                            width="720"
                        />
                    </div>
                </div>
            </div>

            <div className="my-5">
                <div className="row g-0 p-4  align-items-center shadow--md">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">Smart resource saving.</h2>
                        <p className="lead">
                            Our server always automatically turn system down within 10 minutes of inactivity,<br />
                            but will always wake up <u>in fraction of seconds</u> in incoming visit.<br />
                            <b>Why? </b> to prevents memory leak, and make room for everyone else.<br />
                            That's why our service can be so generous!
                        </p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <img
                            className="rounded-lg-3"
                            src="https://via.placeholder.com/600x400/cccccc/969696.png?text=TODO"
                            alt=""
                            width="720"
                        />
                    </div>
                </div>
            </div>


            <div className="my-5">
                <div
                    className="row g-0 p-4  align-items-center shadow--md flex-md-row-reverse"
                >
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">
                            Simple but Powerful Runners
                        </h2>
                        <p className="lead pe-5">
                            From bootstrapping WordPress to repulling Git, it's your command center.<br />
                            Hook it to your GitHub repo via a webhook and it becomes a CI/CD tool
                            to keep your website and deployments sync!
                        </p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <img
                            className="rounded-lg-3"
                            src="https://via.placeholder.com/600x400/cccccc/969696.png?text=TODO"
                            alt=""
                            width="720"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}