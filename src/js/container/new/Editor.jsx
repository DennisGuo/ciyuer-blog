import React, { Component } from 'react';
import {toast} from 'react-toastify';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './Editor.less';

const CodeMirror = window.CodeMirrorEditor;

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'文章标题',
            tags:'',
            tag:[],
            content:'## 这个是文章副标题 \n\n这个是内容　\n\n- 列表\n- 列表\n- 列表'
        }
        this.setValue = this.setValue.bind(this);
        this.preview = this.preview.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount(){
        this.props.change && this.props.change(this.state);
    }

    setValue(key,val){
        var st = this.state;
        st[key] = val;
        //数组
        if(key == 'tags'){
            var arr = val.trim().split(' ');
            st['tag'] = arr;
        }
        this.setState(Object.assign({},st));

        //变化
        this.props.change && this.props.change(st);
    }

    preview(){ 
        if(this.check()){
            this.props.preview && this.props.preview(this.state);
        }
    }

    save(){
        if(this.check()){
            this.props.save && this.props.save(this.state);
        }
    }

    check(){
        var st = this.state;
        if(!st.title.trim()) {
            toast.warn("请填写文章标题");
            return false;
        }
        if(!st.content.trim()) {
            toast.warn("请填写文章内容");
            return false;
        }
        return true;
    }
    
    contentChange(content){
        this.setValue('content',content);
    }

    render() {

        const options = {
            mode:'markdown',
            lineNumbers: false,
            theme:'monokai'
        };

        return (
            <div className="editor">
                <div className="editor-title">

                    <div className="editor-btns">
                        <button className="btn btn-preview" onClick={e=>this.preview()}> <span className="fa fa-eye"></span> 预览</button>
                        <button className="btn btn-save" onClick={e=>this.save()}> <span className="fa fa-save"></span> 保存</button>
                    </div>

                    <input type="text" value={this.state.title} placeholder="请输入标题" onChange={e => this.setValue('title',e.target.value)}/>
                    <input type="text" value={this.state.tags}  placeholder="标签多个空格分隔" onChange={e => this.setValue('tags',e.target.value)}  className="editor-tag"/>

                </div>
                <div className="editor-text">
                    <CodeMirror value={this.state.content} onChange={e=>this.contentChange(e)} options={options} />
                    {/* <textarea value={this.state.content} rows="30" className="editor-content" placeholder="Markdown" onChange={e => this.setValue('content',e.target.value)}></textarea> */}
                </div>
            </div>
        );
    }
}

export default Editor;