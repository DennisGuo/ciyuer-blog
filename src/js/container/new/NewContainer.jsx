import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import Service from '../../service/Service';
import Editor from './Editor';
import Viewer from './Viewer';

import './NewContainer.less';

class NewContainer extends Component {

    constructor(props) {
        super(props);
        this.trigger;
        this.state = {
            flipped:false,
            payload:null,
            redirect:null  // 调整到文章详情页Link
        }
        this.handlePreview = this.handlePreview.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.toggleFlip = this.toggleFlip.bind(this);
    }
    //预览
    handlePreview(data){
        //console.log(data);
        // var st = this.state;
        // st.payload = data;
        // this.setState(Object.assign({},st));
        this.toggleFlip();
       
    }
    //保存
    handleSave(data){
       Service.saveArticle(data,(rs)=>{
          if(rs.status == 201){
            toast.success('保存文章成功！');
            var headers = rs.headers;
            var etag = headers.etag;
            var arr = headers.location.split('/'); 
            var id = arr[arr.length -1 ];
            this.setState(Object.assign({},this.state,{
                redirect:'/article/'+id
            }));
          }
       });
    }
    //监听变化
    handleChange(data){
        var st = this.state;
        st.payload = data;
        this.setState(Object.assign({},st));
    }

    toggleFlip(){
        var st = this.state;
        this.setState(Object.assign({},st,{
            flipped:!st.flipped
        }));
    }

    render() {

        if(this.state.redirect){
            return (<Redirect to={this.state.redirect}/>);
        }

        const editorCls = "new-flip flip-editor animated " + (this.state.flipped ? 'slideOutUp':'slideInDown');
        const viewerCls = "new-flip flip-viewer animated " + (this.state.flipped ? 'slideInUp':'slideOutDown');
        return (
            <div className="new-container">
                    <div className={editorCls} style={{"display":(this.state.flipped ? "none":"block")}}>
                        <Editor
                            save = {this.handleSave}
                            change = {this.handleChange}
                            preview = {this.handlePreview}
                        />
                    </div>
                    <div className={viewerCls} style={{"display":(this.state.flipped ? "block":"none")}}>
                        <div className="viewer-btns">
                            <button className="btn btn-back" onClick={e=>this.toggleFlip()}> <span className="fa fa-times"></span> 返回</button>
                        </div>
                        <Viewer data={this.state.payload}/>
                    </div>
                    <div className="clearfix"></div>
            </div>
        );
    }
}

export default NewContainer;