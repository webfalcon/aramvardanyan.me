import React, { Component } from 'react';
import './App.css';

class Thumb extends Component {
    constructor(props) {
        super(props);
        this.state = {img: ''};
    }

    componentWillMount(){
        this.setState({img: this.props.img});
    }

    render() {
        let thumbImg = {
            background: `url(${(this.state.img ? this.state.img : '/assets/thumb.jpg')})`,
            //background: '#000'
        };
        return (
                <div className="col-sm-5 ">
                    <div className="thumb" style={thumbImg}/>
                </div>
        );
    }
}

export default Thumb;
