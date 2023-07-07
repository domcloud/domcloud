import React from "react";
import { GitHub, Google } from "./Icon";

export default function Home7({ subtitle, title }) {
    return (
        <div className="px-4 py-5 my-5 text--center">
            <h2 className="display-3 fw-bold">{title}</h2>

            <div
                className="d-grid gap-2 d-sm-flex my-2 justify-content-sm-center align-items-center"
            >
                <a
                    href="https://my.domcloud.co/register"
                    className="p-2 button button--secondary font-lg d-flex align-items-center shadow--lw"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{fill: 'currentcolor'}} viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                    <span className="ms-2">Email</span>
                </a>
                <a
                    href="https://my.domcloud.co/login?with=google"
                    className="p-2 button button--secondary d-flex align-items-center shadow--lw"
                >
                    <Google />
                    <span className="ms-2">Google</span>
                </a>
                <a
                    href="https://my.domcloud.co/login?with=github"
                    className="p-2 button button--secondary d-flex align-items-center shadow--lw"
                >
                    <GitHub />
                    <span className="ms-2">GitHub</span>
                </a>
            </div>

            {subtitle}
        </div>
    )
}