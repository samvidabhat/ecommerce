import React from 'react';

export default class Header extends React.Component{
    setSelectedValue(event){
        this.props.setSelectedCategory(event.target.value);
    }
    getHeaderSection(){
        return <div>
            <div className="categories">SHOP BY<br /><strong>categories</strong></div>
        <div className="searchBox">
            <input type="text" placeholder="Search..." className="inputText" />
            <select className="selectList">
                <option value="Everything" name="Everything" onChange={(event)=>this.setSelectedValue(event)}>Everything</option>
                <option value="Electronics" name="Electronics" onChange={(event)=>this.setSelectedValue(event)}>Electronics</option>
                <option value="Beauty" name="Beauty" onChange={(event)=>this.setSelectedValue(event)}>Beauty</option>
                <option value="Fashion" name="Fashion" onChange={(event)=>this.setSelectedValue(event)}>Fashion</option>
                <option value="Home and Living" name="Home and Living" onChange={(event)=>this.setSelectedValue(event)}>Home and Living</option>
                <option value="Grocery" name="Grocery" onChange={(event)=>this.setSelectedValue(event)}>Grocery</option>
            </select>
            <div className="searchImgDiv">
                <i className="fas fa-search searchImg"></i>
            </div>
        </div>
        <div className="login">
            <strong>LOGIN</strong> or <strong> REGISTER</strong>
        </div>
        </div>
    }
    render(){
        return  <div className="header">
        <img className="imageDimension"
            src="data:image/png;base64,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" />
        {this.props.isLoginSuccessful && this.getHeaderSection()}
    </div>;
    }
}