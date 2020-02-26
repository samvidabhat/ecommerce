import React from 'react';
import { jsonResponse } from './jsonResponse';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export default class AllProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            loginError: ""
        }
    }
    componentDidMount() {
        if (!this.props.isLoginSuccessful) {
            this.setState({ loginError: "Please login and try again.", hasError: true })

        }
    }
    getAllProducts() {
        let allProdData = jsonResponse.length && jsonResponse.map((item, i) => {
            return <li key={i} type="none">
                <img src={item.imageUrl} className="imageSize" />
                <div>
                    {item.productName}
                </div>
                <div>
                    {item.price}
                </div>
            </li>
        });
        return allProdData;
    }
    render() {
        return <div>
            {this.state.hasError ? <h2 color="red">
                {this.state.loginError}
            </h2> : <div id="parent">
                    <div id="wide"><Sidebar /></div>
                    <div id="narrow"><ul >
                        {this.getAllProducts()}
                    </ul></div>
                </div>
            }
        </div>;
    }
}