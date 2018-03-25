import React, { Component } from 'react';

import './Editor.less';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            tags:'',
            content:''
        }
        this.setValue = this.setValue.bind(this);
    }

    setValue(key,val){
        var st = this.state;
        st[key] = val;
        this.setState(Object.assign({},st));
    }


    render() {
        return (
            <div className="editor">
                <div className="editor-title">

                    <div className="editor-btns">
                        <button className="btn" onClick={e=>this.props.preview(this.state)}> <span className="fa fa-eye"></span> 预览</button>
                        <button className="btn" onClick={e=>this.props.save(this.state)}> <span className="fa fa-save"></span> 保存</button>
                    </div>

                    <input type="text" value={this.state.title} placeholder="请输入标题" onChange={e => this.setValue('title',e.target.value)}/>
                    <input type="text" value={this.state.tags}  placeholder="标签多个逗号分隔" onChange={e => this.setValue('tags',e.target.value)}  className="editor-tag"/>

                </div>
                <div className="editor-text">
                    <textarea value={this.state.content} rows="20" className="editor-content" placeholder="Markdown" onChange={e => this.setValue('content',e.target.value)}></textarea>
                </div>
            </div>
        );
    }
}

export default Editor;