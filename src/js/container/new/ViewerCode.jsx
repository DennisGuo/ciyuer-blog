import React, { PureComponent } from 'react';

import 'highlight.js/styles/github-gist.css'

const hljs = window.hljs;

class ViewerCode extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
        this.setRef = this.setRef.bind(this)
    }
    setRef(el) {
        this.codeEl = el
    }

    componentDidMount() {
        this.highlightCode()
    }

    componentDidUpdate() {
        this.highlightCode()
    }

    highlightCode() {
        hljs.highlightBlock(this.codeEl)
    }

    render() {
        return (
            <pre>
                <code ref={this.setRef} className={`language-${this.props.language}`}>
                {this.props.value}
                </code>
            </pre>
        );
    }
}

export default ViewerCode;