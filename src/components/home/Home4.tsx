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
                            Complete control over the server
                        </h2>
                        <p className="lead pe-5">
                            Access our servers via non-sudo SSH access to your websites.<br />
                            Install additional tools, languages or compilers at your own will.
                        </p>
                        <div
                            className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
                        >
                            <a href="/docs/features/editor" className="button button--link button--lg px-4 me-md-2">
                                Read documentation
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <ThemedImage
                            sources={{
                                dark: "/assets/ss/ssh-preview.png",
                                light: "/assets/ss/ssh-preview.png"
                            }}
                            alt=""
                            className="rounded-lg-3"
                            height="480"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>


            <div className="my-5">
                <div className="row g-0 p-4  align-items-center shadow--md">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">Your personal development server</h2>
                        <p className="lead">
                            Use our web-based File Manager, Database Explorer and SSH Terminal.<br />
                            Code anywhere with VS Code via <a href="https://code.visualstudio.com/docs/remote/ssh" target="_blank" rel="noreferrer"><b>Remote Development using SSH</b></a>.<br />
                            Hot Reload works out of the box, across the internet!
                        </p>
                        <div
                            className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
                        >
                            <a href="/docs/features/editor#vscode-ssh-remote" className="button button--link button--lg px-4 me-md-2">
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
                            loading="lazy"
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
                            Our HTTP(s) server is powered by NGINX, a powerful web proxy, configurable for all users.<br />
                            With a little reading, You will be able to even mix two separate websites into one domain.
                        </p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <ThemedImage
                            sources={{
                                dark: "/assets/ss/nginx-preview.png",
                                light: "/assets/ss/nginx-preview.png"
                            }}
                            alt=""
                            className="rounded-lg-3"
                            height="480"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="my-5">
                <div className="row g-0 p-4  align-items-center shadow--md">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">Smart resource saving</h2>
                        <p className="lead">
                            Your app will not be running 24/7, but it will be spin up back almost instantly at incoming traffic.<br />
                            This is a win-win solution for saving resources (and money!) you might not even notice it.
                        </p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <ThemedImage
                            sources={{
                                dark: "/assets/ss/dash-b.png",
                                light: "/assets/ss/dash-w.png"
                            }}
                            alt=""
                            className="rounded-lg-3"
                            height="480"
                            loading="lazy"
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
                            Powerful Deployment Tool
                        </h2>
                        <p className="lead pe-5">
                            Manager server features, set up NGINX, run some commands, all in one script.<br />
                            Add it to GitHub CI/CD tool to keep your repository and server code in sync!
                        </p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <ThemedImage
                            sources={{
                                dark: "/assets/ss/new-progress-b.png",
                                light: "/assets/ss/new-progress-w.png"
                            }}
                            alt=""
                            className="rounded-lg-3"
                            height="480"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div
                    className="row g-0 p-4  align-items-center shadow--md flex-md-row"
                >
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-6 fw-bold h4">
                            Self-Hosted? No Problem! <span className="badge badge--primary">New</span>
                        </h2>
                        <p className="lead pe-5">
                            Worrying about data and uptime security? Just BYOC (Bring your own cloud)!.<br />
                            Install our disk image in your own infra, attach your IP addresses here. It will work wonder! 
                        </p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                        <ThemedImage
                            sources={{
                                dark: "/assets/ss/selfhost.png",
                                light: "/assets/ss/selfhost.png"
                            }}
                            alt=""
                            className="rounded-lg-3"
                            height="480"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}