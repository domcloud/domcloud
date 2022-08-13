import React from "react";
import IcHtml from "simple-icons/icons/html5.svg";
import IcPhp from "simple-icons/icons/php.svg";
import IcNode from "simple-icons/icons/nodedotjs.svg";
import IcPython from "simple-icons/icons/python.svg";
import IcRuby from "simple-icons/icons/ruby.svg";
import IcGo from "simple-icons/icons/go.svg";
import IcSqlite from "simple-icons/icons/sqlite.svg";
import IcMariaDB from "simple-icons/icons/mariadb.svg";
import IcPostgre from "simple-icons/icons/postgresql.svg";

export default function Home2() {
    return (
        <div className="px-4 py-5 my-5 text--center">
            <img className="d-block mx-auto mb-4" src="/assets/icon.png" alt="" height="72" />
            <h1 className="display-5 fw-bold">A hosting service that serves all.</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-5">
                    This is not an overly optimistic service that only run specific code.<br />
                    Anything than can <u>run in linux</u>, can be <u>hosted here</u>.
                </p>
                <p><small>Supported language compilers</small></p>
                <div className="container mt-3 mb-5">
                    <div className="row">
                        <div className="col">
                            <IcHtml height={80}/>
                        </div>
                        <div className="col">
                            <IcPhp height={80}/>
                        </div>
                        <div className="col">
                            <IcNode height={80} />
                        </div>
                        <div className="col">
                            <IcPython height={80} />
                        </div>
                        <div className="col">
                            <IcRuby height={80} />
                        </div>
                        <div className="col">
                            <IcGo height={80} />
                        </div>
                    </div>
                </div>
                <p><small>Builtin database instances</small></p>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <IcSqlite height={80}/>
                        </div>
                        <div className="col">
                            <IcMariaDB height={80}/>
                        </div>
                        <div className="col">
                            <IcPostgre height={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}