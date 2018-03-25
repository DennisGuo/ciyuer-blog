import React,{Component} from "react";

import './Slogan.less';

class Slogan extends Component {

    constructor(props) {
        super(props);
        this.interval = null;
        this.state = {  
            item:null,
            index:0
        };
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            let stt = this.state;
            let prp = this.props;
            let idx = stt.index >= prp.data.length ? 0 : stt.index;
            let nxt = prp.data[idx];
            this.setState(Object.assign({},stt,{
                item : nxt,
                index : idx+1
            }))
        },this.props.interval || 3000);
    }

    render() {

        const {item} = this.state;
        const slide = item == null ? '' : (
                <div className="slogan-slide animated slideInDown">
                    <div className="slogan-content">{item.content}</div>
                    <p className="author">{item.author}</p>
                </div>
        );
        return (
            <div className="slogan">                
                {slide}
            </div>
        );
    }
}

export default Slogan;