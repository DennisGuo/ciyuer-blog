import React,{Component} from "react";

import Center from './Center';
import Sidebar from './Sidebar';
import './Content.less';

class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="content">
                <Sidebar/>
                <Center/>
            </div>
        );
    }
}

export default ContentContainer;