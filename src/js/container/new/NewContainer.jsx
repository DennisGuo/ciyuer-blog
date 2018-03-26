import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FlexyFlipCard } from 'flexy-flipcards';

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
        this.handleSave = this.handleSave.bind(this);
        this.toggleFlip = this.toggleFlip.bind(this);
    }
    //预览
    handlePreview(data){
        //console.log(data);
        var st = this.state;
        st.payload = data;
        this.setState(Object.assign({},st));
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

    toggleFlip(){
        var st = this.state;
        this.setState(Object.assign({},st,{
            flipped:!st.flipped
        }));
        if(this.trigger){
            this.trigger.children[0].click();
        }
    }

    render() {

        if(this.state.redirect){
            return (<Redirect to={this.state.redirect}/>);
        }

        const viewerStyle = { display:this.state.flipped ? 'block':'none' };

        return (
            <div className="new-container">
                <FlexyFlipCard 
                    frontBackgroundColor="transparent" 
                    backBackgroundColor="transparent">     
                    <div className="flip">
                        <Editor
                            save = {this.handleSave}
                            preview = {this.handlePreview}
                        />
                        <span ref={ele=>this.trigger = ele}>
                            <span ref="flipper"></span>
                        </span>
                    </div>
                    <div className="flip flip-viewer" style={viewerStyle}>
                        <div className="viewer-btns">
                            <button className="btn" onClick={e=>this.toggleFlip()}> <span className="fa fa-times"></span> 返回</button>
                        </div>
                        <Viewer data={this.state.payload}/>
                    </div>
                </FlexyFlipCard>
            </div>
        );
    }
}

export default NewContainer;