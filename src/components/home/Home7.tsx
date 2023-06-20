import React from "react";
import { GitHub, Google } from "./Icon";

export default function Home7({ subtitle, title }) {
    return (
        <div className="px-4 py-5 my-5 text--center">
            <h2 className="display-3 fw-bold">{title}</h2>
            <div
                className="d-grid gap-2 d-md-flex justify-content-center my-4 mb-lg-3"
            >
                <a
                    href="https://my.domcloud.co/login?with=google"
                    className="p-2 button button--secondary d-flex align-items-center shadow--lw"
                    title="With Google"
                >
                    <Google />
                </a>
                <a
                    className="button button--primary button--lg px-4 fw-bold"
                    href="https://my.domcloud.co/register/"
                >
                    Sign up
                </a>
                <a
                    href="https://my.domcloud.co/login?with=github"
                    className="p-2 button button--secondary d-flex align-items-center shadow--lw"
                    title="With GitHub"
                >
                    <GitHub />
                </a>
            </div>

            {subtitle}
        </div>
    )
}