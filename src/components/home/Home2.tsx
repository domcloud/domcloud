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
                    </div>
                </div>
                <p className="text-right mt-5"><small><i>*) logos are just representation, we're not affiliated with them :)</i></small></p>
            </div>
        </div>
    )
}