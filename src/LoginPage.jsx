import React from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLoginSuccessful:false
        }
       
    }
    handlevalidation(e,details) {
        this.props.setLoginSuccessfulInd(true);    
    }
    render() {
        return <div className="loginpage">
            <form onSubmit={(e,details)=>this.handlevalidation(e,details)}>
                <div>
                    <label>Username<span className="requiredred">*</span></label>
                    <input  type="text" name="uname" required />
                </div>
                <div  className="pwd">
                    <label>Password<span className="requiredred">*</span></label>
                    <input  type="password" name="pwd" required />

                </div>
                <button className="submitLogin" type="submit">Login</button>  
                {this.props.isLoginSuccessful &&  <Redirect to={"/storePage"} />} 
            </form>
        </div>
    }
}