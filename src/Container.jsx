import React from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";
import StoreFrontPage from './StoreFrontPage';
import AllProductsPage from './AllProductsPage';
import Header from './Header';
export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedCategory:"Everything",
            isLoginSuccessful:false
        }
        this.setSelectedCategory=this.setSelectedCategory.bind(this);
        this.setLoginPage=this.setLoginPage.bind(this);
        this.setLoginSuccessfulInd=this.setLoginSuccessfulInd.bind(this);
    }
    setSelectedCategory(value){
        this.setState({selectedCategory:value});
    }
    setLoginPage(value){
        this.setState({isLoginPage:value});
    }
    setLoginSuccessfulInd(val){
        this.setState({isLoginSuccessful:val});
    }
    render(){
        return <div className="container"> 
        <Router>
        {<Header setSelectedCategory={this.setSelectedCategory} isLoginSuccessful={this.state.isLoginSuccessful} />}
            <div>
            <Switch>
                <Route exact path="/" component={() => <LoginPage 
                    isLoginSuccessful={this.state.isLoginSuccessful}
                    setLoginSuccessfulInd={this.setLoginSuccessfulInd} />}/>
                <Route path="/storePage" component={()=><StoreFrontPage isLoginSuccessful={this.state.isLoginSuccessful}
                        selectedCategory={this.state.selectedCategory} 
                        setSelectedCategory={this.setSelectedCategory} 
                        setLoginPage={this.setLoginPage}/>} />
                <Route path="/allProducts" component={()=><AllProductsPage selectedCategory={this.state.selectedCategory}
                         setLoginPage={this.setLoginPage}
                         isLoginSuccessful={this.state.isLoginSuccessful}/>} />
                <Redirect from="/*" to="/pagenotfound" />
            </Switch>
            </div>
    </Router>
    </div>;
    }
}