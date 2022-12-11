import React from "react";

export default function Home3() {
    return (
        <div className="my-5">
            <div className="row g-0 p-4 align-items-center shadow--md">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h2 className="display-6 fw-bold h4">
                        From stratch, or existing repo.
                    </h2>
                    <p className="lead">
                        Start your website with couple of clicks.<br />
                        We have tens of deployments recipes ready to boot,<br />
                        either from stratch or from your existing repo.
                    </p>
                    <div
                        className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
                    >
                        <a
                            href="/docs/deploying/"
                            className="button button--primary button--lg px-4 me-md-2 fw-bold"
                        >
                            Browse more
                        </a>
                        <a href="https://github.com/domcloud/recipes" className="button button--link button--lg px-4 me-md-2">
                            See them all
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 preview p-0 overflow-hidden shadow--md">
                    <img
                        className="rounded-lg-3"
                        src="/assets/ss/templates.png"
                        alt=""
                        height="480"
                    />
                </div>
            </div>
        </div>
    )
}