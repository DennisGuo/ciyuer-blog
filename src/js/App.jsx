import React,{ Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import HeaderContainer from './container/header/HeaderContainer';
import ContentContainer from './container/content/ContentContainer';
import FooterContainer from './container/footer/FooterContainer';
import NewContainer from './container/new/NewContainer';
import ArticleContainer from './container/article/ArticleContainer';

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
                <Switch>
                    <Route path="/" exact component={ContentContainer}/>
                    <Route path="/new" component={NewContainer}/>
                    <Route path="/article/:id" component={ArticleContainer}/>
                </Switch>
                <FooterContainer/>
                
                <ToastContainer/>
            </div>
        );
    }
}
// broswer router
ReactDOM.render((<Router><App/></Router>),document.getElementById("root"));

export default App;