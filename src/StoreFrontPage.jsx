import React from 'react';
import FeaturedListSlider from './FeaturedListSlider';
import ProductsListSlider from './ProductsListSlider';
import Sidebar from './Sidebar';
export default class StoreFrontPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hasError: false,
            loginError: ""
        }
    }
    componentDidMount(){
        if (!this.props.isLoginSuccessful) {
            this.setState({loginError:["Please login and try again."],hasError:true})
        }
    }
    getItems() {
        return <div >
           <FeaturedListSlider />
           <ProductsListSlider selectedCategory={this.props.selectedCategory} setSelectedCategory={this.props.setSelectedCategory} />
        </div>

    }
    render() {
        return <div>
            {this.state.hasError ? <h2 color="red">
                {this.state.loginError}
            </h2> : this.getItems()}
        </div>
    }
}