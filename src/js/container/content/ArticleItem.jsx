import React,{Component} from "react";
import {Redirect} from 'react-router-dom';
import ViewerCode from '../new/Viewer';

import './ArticleItem.less';
import Viewer from "../new/Viewer";

class ArticleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect:null
        };
        this.clickItem = this.clickItem.bind(this);
    }

    clickItem(item){
        if(item && item['_id']){
            this.setState(Object.assign({},this.state,{
                redirect:'/article/'+item['_id']['$oid']
            }));
        }
    }

    render() {
        if(this.state.redirect){
            return (<Redirect to={this.state.redirect}/>);
        }
        const item = this.props.data;

        return (
            <div className="article-item">
                <Viewer 
                    data={item} 
                    toc={false}
                    handler={this.clickItem}/>
            </div>
        );
    }
}

export default ArticleItem;