import React, { Component } from 'react';
import './App.css';
import Main from './Main';

class Testimonials extends Component {
    render() {
        return (
            <Main>
                <div>
                    <div className="pages">
                        <div>
                            <div className="textContainer">
                                <h1>Hi, I'm Aram<br/>A web designer and developer</h1>
                                <h2>It’s not a job, it’s calling.</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <br/>
                                    <br/>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                    <br/>
                                    <br/>
                                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <div className="about-bottom">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p>
                                                Best Regards<br/>
                                                Aram Vardanyan
                                            </p>
                                        </div>
                                        <div className="col-sm-6 text-right">
                                            <button className="btn btn-standard">WORKS I'VE DONE</button>
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

export default Testimonials;
