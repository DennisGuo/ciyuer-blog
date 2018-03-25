import React,{ Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route} from 'react-router-dom';

import HeaderContainer from './container/header/HeaderContainer';
import ContentContainer from './container/content/ContentContainer';
import FooterContainer from './container/footer/FooterContainer';
import NewContainer from './container/new/NewContainer';

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
                
                <Route path="/" exact component={ContentContainer}/>
                <Route path="/new" component={NewContainer}/>
                
                <FooterContainer/>
            </div>
        );
    }
}
// broswer router
ReactDOM.render((<Router><App/></Router>),document.getElementById("root"));

export default App;