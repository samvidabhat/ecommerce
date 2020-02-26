import React from 'react';
import { Link } from "react-router-dom";

export default class ProductsListSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [{
                'productName': 'Headphones',
                'category': ['Electronics'],
                'price': '1599',
                'imageUrl': 'https://i.pinimg.com/originals/c6/b0/1e/c6b01e0adc7e89f8c7f3d0357a13cdb7.jpg'
            },
            {
                'productName': 'xvz perfume',
                'category': ['Beauty'],
                'price': '299',
                'imageUrl': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2F1549057151%2Ftout-best-perfumes.jpg'
            },
            {
                'productName': 'AP Laptop X-1234',
                'category': ['Electronics'],
                'imageUrl': 'https://purepng.com/public/uploads/large/purepng.com-laptop-notebooklaptopsnotebooknotebook-computerclamshell-1701528355163twdze.png',
                'price': '599'
            },
            {
                'productName': 'abc curtain',
                'category': ['Home and Living'],
                'imageUrl': 'https://rukminim1.flixcart.com/image/352/352/js98x3k0/curtain/z/x/x/polyester-curtain-set-of-2-182-88-atpurlpr-857503-eyelet-original-imafdtadrj7efkhb.jpeg?q=70',
                'price': '399'
            }, {
                'productName': 'Crompton Fan',
                'category': ['Home and Living', 'Electronics'],
                'imageUrl': 'https://5.imimg.com/data5/ME/KC/BC/IOS-3891570/product-jpeg-500x500.png',
                'price': '899'
            },
            {
                'productName': 'hannah Jeans blue slim-fit',
                'category': ['Fashion'],
                'imageUrl': 'https://rukminim1.flixcart.com/image/352/352/js98x3k0/curtain/z/x/x/polyester-curtain-set-of-2-182-88-atpurlpr-857503-eyelet-original-imafdtadrj7efkhb.jpeg?q=70',
                'price': '399'
            }, {
                'productName': 'Leather Belt',
                'category': ['Fashion'],
                'imageUrl': 'https://5.imimg.com/data5/ME/KC/BC/IOS-3891570/product-jpeg-500x500.png',
                'price': '899'
            }]
        }
    }
    getProductsList() {
        let productData = this.state.productList && this.state.productList.map((prod, i) => {
                return <li key={i} type="none">
                    <img src={prod.imageUrl} className="imageSize" />
                    <div>
                        {prod.productName}
                    </div>
                    <div>
                        {prod.price}
                    </div>
                </li>
            });

        return productData;
    }
    render() {
        return <div className="productsListSlider">
            <div>
                <strong className="fontSize">
                    Exciting technology deals
                        <Link className="linkPosition" 
                            to={"/allProducts"} rel="noopener noreferrer" >View all products <i className="fas fa-chevron-right" /></Link>
                </strong>
            </div>
            <hr color="red"/>
            <ul>
                {this.getProductsList()}
            </ul>
        </div>
    }
}