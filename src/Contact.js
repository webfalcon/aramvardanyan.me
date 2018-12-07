import React, { Component } from 'react';
import './App.css';
import Main from './Main';

class Contact extends Component {

    render() {
        return (
            <Main>
                <div>
                    <div className="pages">
                        <div>
                            <div className="textContainer">
                                <h1>Let's talk about you</h1>
                                <h2>I’m listening. Every company is different,<br/>
                                    so tell me about you, your brand, your customers, your ideas.</h2>
                                <p>Feel free to email me: <a className="emailMe" href="mailto:email@aramvardanyan.me?subject=Hi, I need a website&body=Hi Aram, Nice to meet you!">email@aramvardanyan.me</a></p>
                                <div className="about-bottom">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p>
                                                Best Regards<br/>
                                                Aram Vardanyan
                                            </p>
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

export default Contact;
