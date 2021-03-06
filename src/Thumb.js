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
                <div className="thumbnail">
                    <div className={this.props.menu ? 'thumb blur' : 'thumb'} style={thumbImg}/>
                </div>
        );
    }
}

export default Thumb;
