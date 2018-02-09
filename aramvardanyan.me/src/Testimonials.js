import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { Link } from 'react-router-dom';

class Testimonials extends Component {
    render() {
        return (
            <Main>
                <div>
                    <div className="pages">
                        <div>
                            <div className="textContainer">
                                <h1>My Clients about me</h1>
                                <h2>It’s not a job, it’s calling.</h2>
                                <div className="testimonial">
                                    <h3>VAZGEN ZOHRABYAN</h3>
                                    <span>CEO @ DPM Armenia</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </p>
                                </div>
                                <div className="testimonial">
                                    <h3>VAZGEN ZOHRABYAN</h3>
                                    <span>CEO @ DPM Armenia</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </p>
                                </div>
                                <div className="testimonial">
                                    <h3>VAZGEN ZOHRABYAN</h3>
                                    <span>CEO @ DPM Armenia</span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </p>
                                </div>
                                <div className="about-bottom">
                                    <Link to="/contact" className="btn btn-standard center">LET'S START YOURS</Link>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Main>

        );
    }
}

export default Testimonials;
