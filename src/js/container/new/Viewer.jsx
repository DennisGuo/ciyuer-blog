import React, { Component } from 'react';
import MarkdownContents from 'markdown-contents';
import Markdown from 'react-markdown';
import ViewerCode from './ViewerCode';

import 'github-markdown-css/github-markdown.css';
import './Viewer.less';
class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.clickTitle = this.clickTitle.bind(this);
    }



    getToc(content){
        var rs = MarkdownContents(content).markdown();
        console.log(rs);
        return rs;
    }

    clickTitle(){
        if(this.props.handler){
            this.props.handler(this.props.data);
        }
    }

    getHeadRender(){
        return (props)=>{
            const text = props.children.join(' ');
            const slug = text
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z-]/g, '');
            
            return React.createElement(`h${props.level}`, {id: slug}, props.children);
        };
    }
    
    render() {
        const data = this.props.data||{title:'无内容',content:'无内容',tag:[]};
        const labels = data.tag.map((tag,idx)=>{
            return (<span className="label" key={idx}>{tag}</span>);
        });
        const render = {
            heading : this.getHeadRender(),
            code: ViewerCode
        };
        const toc = this.getToc(data.content);
        const cls = "viewer " + (this.props.toc === false ? '': "has-toc");
        return (
            <div className={cls}>
                <h2 className="title" onClick={e=>this.clickTitle()}>{data.title}</h2>
                <div className="tags">
                    {labels}
                </div>
                {
                    this.props.toc === false ? '' : (
                        <div className="toc">
                            <h2>目录</h2>
                            <Markdown className="toc-content markdown-body" source={toc}/>
                        </div>
                    )
                }                

                <Markdown className="viewer-content markdown-body" source={data.content} renderers={render}/>

               
            </div>
        );
    }
}

export default Viewer;