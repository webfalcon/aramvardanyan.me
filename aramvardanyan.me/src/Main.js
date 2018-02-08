import React, { Component } from 'react';
import Thumb from './Thumb';
import './App.css';
import { Link } from 'react-router-dom';



class Main extends Component {
    componentWillMount(){

    }
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="main">
                <div className="row">
                    <Thumb img={this.props.thumb}/>
                    <div className="col-sm-7 content">

                        <div className="fat-nav">
                            <div className="fat-nav__wrapper">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About me</Link></li>
                                    <li><Link to="/portfolio">Work I've Done</Link></li>
                                    <li><Link to="/testimonials">Clients about Me</Link></li>
                                    <li><Link to="/offers">What I can offer you</Link></li>
                                    <li><Link to="/contact">Hire me</Link></li>
                                </ul>
                            </div>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
