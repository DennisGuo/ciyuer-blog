import React,{ Component } from 'react';
import ReactDOM from "react-dom";

import HeaderContainer from './container/header/HeaderContainer';
import ContentContainer from './container/content/ContentContainer';

import './App.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <HeaderContainer/>
                <ContentContainer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));

export default App;