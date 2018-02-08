import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { Link } from 'react-router-dom';

class Offers extends Component {
    render() {
        return (
            <Main>
                <div>
                    <div className="pages">
                        <div>
                            <div className="textContainer">
                                <h1>What I can offer you</h1>
                                <h2>Are you interested for a partnership?</h2>
                                <p>
                                    If you are looking for:
                                </p>
                                    <ul>
                                        <li>Website Design/development                     </li>
                                        <li>Wordpress Website                              </li>
                                        <li>Ecommerce (online shop)                        </li>
                                        <li>Create custom wordpress plugin/theme/add-ons   </li>
                                        <li>Mobile App iOS/Android                         </li>
                                        <li>Web apps (with reactJS)                        </li>
                                        <li>Website monthly/yearly support                 </li>
                                        <li>Domain/hosting                                 </li>
                                    </ul>
                                <p>And interested in this skills:</p>

                                    <ul>
                                        <li>UI/UX design for websites and native apps                      </li>
                                        <li>Understanding what makes a site successful                     </li>
                                        <li>Coding HTML/CSS, javascript (react, react-native), PHP and more</li>
                                        <li>Creating 360 degree VR apps                                    </li>
                                        <li>Finding other awesome designers and developers                 </li>
                                        <li>Helping make sense of it all                                   </li>
                                        <li>and much more                                                  </li>
                                    </ul>
                                <p>
                                    Please contact me!
                                </p>
                                <div className="about-bottom">
                                    <Link to="/contact" className="btn btn-standard">CONTACT ME</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Main>

        );
    }
}

export default Offers;
