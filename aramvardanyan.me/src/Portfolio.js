import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
    render() {
        return (
            <Main>
                <div>
                    <div className="pages">
                        <div>
                            <div className="textContainer">
                                <h1>Work I've Done</h1>
                                <h2>It’s not a job, it’s calling.</h2>
                                <div className="row porfolio-row">
                                    <div className="col-sm-6">
                                        <div className="portfolio" data-toggle="modal" data-target="#DPMArmenia">
                                            <h3>DPM Armenia</h3>
                                            <img src="/assets/dpmArmenia.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>Mister Handsome</h3>
                                            <img src="/assets/misterHandsome.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3 className="textBlack">Energy Systems</h3>
                                            <img src="/assets/energySystems.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>StitchingLab</h3>
                                            <img src="/assets/Stitchinglab.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>Mollie Payment Addon</h3>
                                            <img src="/assets/Mollie.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>GraceTour</h3>
                                            <img src="/assets/gracetour.png" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-bottom">
                                    <Link to="/contact" className="btn btn-standard center">LET'S START YOURS</Link>
                                </div>
                                <div className="modals">
                                    <div id="DPMArmenia" className="modal fade" role="dialog">
                                        <div className="modal-dialog">

                                            <div className="modal-content">
                                                <button type="button" className="modalClose" data-dismiss="modal"/>
                                                <img src="/assets/dpmArmenia.png" alt="" className="modal-thumb img-fluid"/>
                                                <div className="modal-body">
                                                    <h3>DPM Armenia</h3>
                                                    <p>
                                                        Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                                                    </p>
                                                    <a rel="noopener noreferrer" target="_blank" className="visitSite" href="http://derekprincearmenia.com/">Visit Site</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Main>

        );
    }
}

export default Portfolio;
