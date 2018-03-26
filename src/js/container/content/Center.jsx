import React,{Component} from "react";
import { toast } from 'react-toastify';

import Service from '../../service/Service';
import Empty from '../../component/Empty';
import ArticleItem from './ArticleItem';

class Center extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles:[],
            page:1,
            limit:20
        };
    }

    componentWillMount(){
        Service.getArticles(this.state.page,this.state.limit,null,null,(res)=>{
            if(res.status == 200){
                this.setState(Object.assign({},this.state,{
                    articles:res.data._embedded
                }))
            }else{
                toast.error('加载文章数据出错.');
            }
        });
    }

    render() {
        const list = this.state.articles.map((item,idx)=>{
            return (<ArticleItem data={item} key={idx} />)
        });

        return (
            <div className="center animated slideInLeft">
                {list ? list : <Empty />}
            </div>
        );
    }
}

export default Center;