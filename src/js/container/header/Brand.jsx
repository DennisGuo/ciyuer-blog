import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FlexyFlipCard } from 'flexy-flipcards';

import './Brand.less';

class Brand extends Component {
    constructor(props){
        super(props);
        this.trigger;
        this.toggleFlip = this.toggleFlip.bind(this);
    }

    toggleFlip(){
        if(this.trigger){
            this.trigger.children[0].click();
        }
    }

    render() {
        const brand = this.props.data;
        return (
            <div className="brand animated slideInLeft" >
                <FlexyFlipCard 
                    frontBackgroundColor="transparent" 
                    backBackgroundColor="transparent" >     
                    <div className="flip" onMouseEnter={e => this.toggleFlip()}>
                        <h1>{brand.title}</h1>
                        <p className="subtitle">{brand.subtitle}</p>
                        <span ref={ele=>this.trigger = ele}>
                            <span ref="flipper"></span>
                        </span>
                    </div>
                    <div className="flip" onMouseLeave={e => this.toggleFlip()}>
                        <Link className="btn btn-default" to="/" >
                            <span className="fa fa-home"></span> 首页 
                        </Link>
                        <Link className="btn btn-default" to="/new" >
                            <span className="fa fa-file"></span> 写文章 
                        </Link>
                    </div>
                </FlexyFlipCard>
            </div>
        );
    }
}

export default Brand;