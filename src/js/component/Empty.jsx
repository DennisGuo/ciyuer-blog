import React, { Component } from 'react';

import './Empty.less';

class Empty extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="empty">
                <span className="fa fa-archive"></span> <br/> {this.props.text ? this.props.text : '暂无数据'}
            </div>
        );
    }
}

export default Empty;