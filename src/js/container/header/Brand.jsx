import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FlipCard from '@kennethormandy/react-flipcard';
import '@kennethormandy/react-flipcard/dist/Flipcard.css';

import './Brand.less';

class Brand extends Component {
    constructor(props){
        super(props);

        this.state = {
            flipped:false
        }
    }
    render() {
        const brand = this.props.data;
        return (
            <div className="brand animated slideInLeft" >
                <FlipCard type="horizontal" flipped={this.state.flipped}>     
                    <div className="flip" onMouseOver={e => this.setState({ flipped: true})}>
                        <h1>{brand.title}</h1>
                        <p className="subtitle">{brand.subtitle}</p>
                    </div>
                    <div className="flip" onMouseLeave={e => this.setState({ flipped: false})}>
                        <Link className="btn btn-default" to="/new" >
                            <span className="fa fa-file"></span> 写文章 
                        </Link>
                    </div>
                </FlipCard>
            </div>
        );
    }
}

export default Brand;