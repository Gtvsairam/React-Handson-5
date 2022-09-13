import React from 'react';
import Hoc from './Hoc';

class ProductList extends React.Component{
    render() {
        return(
            <div>
                <h4>This is ProductList</h4>
                {
                    this.props.products.map((item,index) => {
                        return (
                            <p key={index}>{item.productName} {item.price}</p>
                        )
                    })
                }
            </div>
        )
    }
}

const EnhancedComponent = Hoc(ProductList)


export default EnhancedComponent