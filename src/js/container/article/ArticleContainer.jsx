import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Viewer from '../new/Viewer';
import Service from '../../service/Service';

import './Article.less';

class ArticleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            article:null
        };
    }
    componentDidMount(){
        Service.getArticle(this.props.match.params.id,(data)=>{
            if(data.status == 200 ){
                var article = data.data;
                this.setState(Object.assign({},this.state,{
                    article:article
                }));
                
            }else{
                toast.error('获取文章数据出错.');
            }
        });
    }
    render() {
        return (
            <div className="article">
               <Viewer data={this.state.article}/>
            </div>
        );
    }
}

export default ArticleContainer;