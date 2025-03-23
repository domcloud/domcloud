import React from "react";
import IcHtml from "simple-icons/icons/html5.svg";
import IcPhp from "simple-icons/icons/php.svg";
import IcNode from "simple-icons/icons/nodedotjs.svg";
import IcPython from "simple-icons/icons/python.svg";
import IcRuby from "simple-icons/icons/ruby.svg";
import IcGo from "simple-icons/icons/go.svg";
import IcRust from "simple-icons/icons/rust.svg";
import IcDeno from "simple-icons/icons/deno.svg";
import IcBun from "simple-icons/icons/bun.svg";
import IcJava from "simple-icons/icons/openjdk.svg";
import IcDotNet from "simple-icons/icons/dotnet.svg";
import IcZig from "simple-icons/icons/zig.svg";
import IcDocker from "simple-icons/icons/docker.svg";

import IcSqlite from "simple-icons/icons/sqlite.svg";
import IcMariaDB from "simple-icons/icons/mariadb.svg";
import IcPostgre from "simple-icons/icons/postgresql.svg";
import IcValkey from "simple-icons/icons/valkey.svg";

export default function Home2() {
    return (
        <div className="px-4 py-5 my-5 text--center">
            <img className="d-block mx-auto mb-4" src="/assets/icon.png" alt="" height="72" />
            <h1 className="display-5 fw-bold">A hosting service that serves all</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-5">
                    This is not an optimistic hosting service that only works for a specific code language.<br />
                    Anything than can <u>run in linux</u>, can be <u>hosted here</u>.
                </p>
                <p><small>Officially supported software compilers and interpreters</small></p>
                <div className="container mt-3 mb-5">
                    <div className="row">
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/php">
                                <IcPhp height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/node">
                                <IcNode height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/python">
                                <IcPython height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/ruby">
                                <IcRuby height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/go">
                                <IcGo height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/rust">
                                <IcRust height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/deno">
                                <IcDeno height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/bun">
                                <IcBun height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/java">
                                <IcJava height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/dotnet">
                                <IcDotNet height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/zig">
                                <IcZig height={80} />
                            </a>
                        </div>
                        <div className="col-3 my-2">
                            <a href="/docs/deployment/docker">
                                <IcDocker height={80} />
                            </a>
                        </div>
                    </div>
                </div>
                <p><small>Builtin database instances</small></p>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <a href="/docs/features/database#sqlite">
                                <IcSqlite height={80} />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/docs/features/database#mariadb">
                                <IcMariaDB height={80} />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/docs/features/database#postgres">
                                <IcPostgre height={80} />
                            </a>
                        </div>
                        <div className="col">
                            <a href="/docs/features/database#valkey">
                                <svg viewBox="0 0 64 73" height={80} xmlns="http://www.w3.org/2000/svg">
                                    <path id="Path" fill-rule="evenodd" stroke="none" d="M 13.482285 60.694962 L 0.998384 52.884399 L 0.998384 19.502914 L 31.527868 2.001205 L 61.317604 19.532024 L 61.317604 54.64489 L 31.054855 71.68927 L 20.548372 65.115807 L 20.548372 51.041328 L 20.548372 49.119896 L 14.851504 45.555508 L 14.851504 27.453159 L 31.346497 17.99712 L 47.464485 27.482262 L 47.464485 46.451157 L 34.703495 53.638138 L 34.703495 45.998573 C 38.52874 44.52552 41.274452 40.739189 41.274452 36.270489 C 41.274452 30.510658 36.712814 25.88438 31.158138 25.88438 C 25.603172 25.88438 21.041817 30.510658 21.041817 36.270489 C 21.041817 40.739189 23.787249 44.52552 27.612494 45.998573 L 27.612494 60.473576 L 31.261133 62.756348 L 53.635483 50.15464 L 53.635483 23.924595 L 31.477489 10.884869 L 8.680504 23.953705 L 8.680504 48.628967 L 13.482285 51.633297 L 13.482285 60.694962 Z M 31.158138 31.498383 C 33.671822 31.498383 35.660439 33.664162 35.660439 36.270489 C 35.660439 38.876804 33.671822 41.042587 31.158138 41.042587 C 28.644447 41.042587 26.655558 38.876804 26.655558 36.270489 C 26.655558 33.664162 28.644447 31.498383 31.158138 31.498383 Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-right mt-5"><small><i>*) logos are just representation, we're not affiliated with them :)</i></small></p>
            </div>
        </div>
    )
}