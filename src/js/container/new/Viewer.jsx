import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

import './Viewer.less';
class Viewer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const data = this.props.data||{title:'无内容',content:'无内容'};

        return (
            <div className="viewer">
                <h2>{data.title}</h2>
                <ReactMarkdown source={data.content}/>
            </div>
        );
    }
}

export default Viewer;