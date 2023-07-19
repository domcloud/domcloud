import Layout from "@theme/Layout";
import React from "react";

import FaHdd from '@fortawesome/fontawesome-free/svgs/solid/hdd.svg';
import FaGlobe from '@fortawesome/fontawesome-free/svgs/solid/globe.svg';
import FaLock from '@fortawesome/fontawesome-free/svgs/solid/lock.svg';
import FaBrief from '@fortawesome/fontawesome-free/svgs/solid/briefcase.svg';
import FaUsers from '@fortawesome/fontawesome-free/svgs/solid/users.svg';
import FaAtlas from '@fortawesome/fontawesome-free/svgs/solid/atlas.svg';
import FaCartPlus from '@fortawesome/fontawesome-free/svgs/solid/cart-plus.svg';
import FaQuestion from '@fortawesome/fontawesome-free/svgs/solid/question.svg';
import './price.css';
import Home7 from "../components/home/Home7";
import Home5 from "../components/home/Home5";

export default function Pricing() {
    return (
        <Layout
            title={`DOM Cloud Hosting`}
            description="Description will go into a meta tag in <head />">
            <div className="text--center my-5">
                <h1>Pricing details</h1>
                <p>Subscription options for those who grow</p>
                <p><i>2 months discount for yearly plans!</i></p>
            </div>
            <div className="container my-5 pricing">
                <div className="row justify-content-stretch">
                    <div className="col-sm-6 my-2 col-lg-4">
                        <div className="card-demo shadow--md">
                            <div className="card">
                                <div className="card__header">
                                    <h3>Lite Plan</h3>
                                </div>
                                <div className="card__body">
                                    <div className="text--center">
                                        <h2 className="cap">1.50$</h2>
                                        <p><small>A month</small></p>
                                    </div>
                                    <div className="item">
                                        <FaHdd /> <span><b>3 GiB</b> Total Storage</span>
                                    </div>
                                    <div className="item">
                                        <FaGlobe /> <span><b>20 GiB</b> Data Network / month</span>
                                    </div>
                                    <div className="item">
                                        <FaBrief /> <span>Maximum of <b>6 instances</b></span>
                                    </div>
                                    <div className="item">
                                        <FaUsers /> <span>Team of <b>2 users</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 my-2 col-lg-4">
                        <div className="card-demo shadow--md">
                            <div className="card">
                                <div className="card__header">
                                    <h3>Kit Plan</h3>
                                </div>
                                <div className="card__body">
                                    <div className="text--center">
                                        <h2 className="cap">5.00$</h2>
                                        <p><small>A month</small></p>
                                    </div>
                                    <div className="item">
                                        <FaHdd /> <span><b>10 GiB</b> Total Storage</span>
                                    </div>
                                    <div className="item">
                                        <FaGlobe /> <span><b>100 GiB</b> Data Network / month</span>
                                    </div>
                                    <div className="item">
                                        <FaBrief />  <span>Maximum of <b>10 instances</b></span>
                                    </div>
                                    <div className="item">
                                        <FaUsers />  <span>Team of <b>4 users</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 my-2 col-lg-4">
                        <div className="card-demo shadow--md">
                            <div className="card">
                                <div className="card__header">
                                    <h3>Pro Plan</h3>
                                </div>
                                <div className="card__body">
                                    <div className="text--center">
                                        <h2 className="cap">15.00$</h2>
                                        <p><small>A month</small></p>
                                    </div>
                                    <div className="item">
                                        <FaHdd /> <span><b>30 GiB</b> Total Storage</span>
                                    </div>
                                    <div className="item">
                                        <FaGlobe /> <span><b>500 GiB</b> Data Network / month</span>
                                    </div>
                                    <div className="item">
                                        <FaBrief /> <span>Maximum of <b>25 instances</b></span>
                                    </div>
                                    <div className="item">
                                        <FaUsers /> <span>Team of <b>10 users</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 pt-5" id="featured-3">
                <Home5 title="Try before buy!" />
                <h2 className="pb-2 border-bottom text--center">
                    Benefits for subscribers!  <span className="badge badge--success">support 💚</span>
                </h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature premium col">
                        <div className="feature-icon badge">
                            <FaAtlas />
                        </div>
                        <h2>Custom Domain</h2>
                        <p>Put the website to your own domain</p>
                    </div>
                    <div className="feature premium col">
                        <div className="feature-icon badge">
                            <FaCartPlus />
                        </div>
                        <h2>Add-ons Billing</h2>
                        <p>
                            No sudden over-usage shutdowns (coming soon).
                        </p>
                    </div>
                    <div className="feature premium col">
                        <div className="feature-icon badge">
                            <FaQuestion />
                        </div>
                        <h2>Prioritized Support</h2>
                        <p>
                            We'll seriously consider your support request.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Home7 title="Starts Risk Free!" subtitle="No credit card required" />
            </div>
        </Layout>
    )
}