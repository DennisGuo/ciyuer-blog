import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FlexyFlipCard } from 'flexy-flipcards';

import Editor from './Editor';
import Viewer from './Viewer';

import './NewContainer.less';

class NewContainer extends Component {

    constructor(props) {
        super(props);
        this.trigger;
        this.state = {
            flipped:false,
            payload:null
        }
        this.handlePreview = this.handlePreview.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    //预览
    handlePreview(data){
        //console.log(data);
        var st = this.state;
        st.payload = data;
        this.setState(Object.assign({},st));
        
        if(this.trigger){
            this.trigger.children[0].click();
        }
    }
    //保存
    handleSave(data){
        console.log(data);
    }

    render() {
        return (
            <div className="new-container">
                <FlexyFlipCard 
                    frontBackgroundColor="transparent" 
                    backBackgroundColor="transparent" 
                    flipped={this.state.flipped}>     
                    <div className="flip">
                        <Editor
                            save = {this.handleSave}
                            preview = {this.handlePreview}
                        />
                        <span ref={ele=>this.trigger = ele}>
                            <span ref="flipper"></span>
                        </span>
                    </div>
                    <div className="flip">
                        <Viewer data={this.state.payload}/>
                    </div>
                </FlexyFlipCard>
            </div>
        );
    }
}

export default NewContainer;