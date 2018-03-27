import React, { Component } from 'react';
import Markdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

import MarkdownToc from '../../lib/MarkdownToc';
import ViewerCode from './ViewerCode';

import './Viewer.less';
class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tocShow:true
        }
        this.clickTitle = this.clickTitle.bind(this);
        this.toggleToc = this.toggleToc.bind(this);
    }

    getToc(content){
        return MarkdownToc(content).markdown();
    }

    clickTitle(){
        if(this.props.handler){
            this.props.handler(this.props.data);
        }
    }

    getHeadRender(){
        return (props)=>{
            const text = props.children.join(' ').trim();
            const slug = encodeURI(text);
            
            return React.createElement(`h${props.level}`, {id: slug}, props.children);
        };
    }

    toggleToc(){
        var st = this.state;
        this.setState(Object.assign({},st,{
            tocShow:!st.tocShow
        }));
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
        const tocCls = {
            display:this.state.tocShow ? "block" : "none"
        };

        return (
            <div className={cls}>
                <h2 className="title" onClick={e=>this.clickTitle()}>{data.title}</h2>
                <div className="tags">
                    {labels.length>0?labels:(<span className="label">默认</span>)}
                </div>
                {
                    this.props.toc === false ? '' : (
                        <div className="toc" >
                            <h2> <span className="toc-collapse" onClick={e=>this.toggleToc()}> { this.state.tocShow ? '[ - ]':'[ + ]'} </span> 目录 </h2>
                            <div style={tocCls}>
                                <Markdown className="toc-content markdown-body"  source={toc}/>
                            </div>
                        </div>
                    )
                }                

                <Markdown className="viewer-content markdown-body" source={data.content} renderers={render}/>

               
            </div>
        );
    }
}

export default Viewer;