import React, { Component } from 'react';
import './App.css';
import Main from './Main';

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
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>DPM Armenia</h3>
                                            <img src="/assets/dpmArmenia.png" alt="" className="img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>Mister Handsome</h3>
                                            <img src="/assets/misterHandsome.png" alt="" className="img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3 className="textBlack">Energy Systems</h3>
                                            <img src="/assets/energySystems.png" alt="" className="img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>StitchingLab</h3>
                                            <img src="/assets/Stitchinglab.png" alt="" className="img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>Mollie Payment Addon</h3>
                                            <img src="/assets/Mollie.png" alt="" className="img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="portfolio">
                                            <h3>GraceTour</h3>
                                            <img src="/assets/gracetour.png" alt="" className="img-responsive"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-bottom">
                                    <button className="btn btn-standard">LET'S START YOURS</button>
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
