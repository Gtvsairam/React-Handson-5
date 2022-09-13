import React from 'react'
const products = [
    {productName: 'Home appliances',price: "10,000"},
    {productName: 'Mobiles',price: 9000},
    {productName: 'Kitchen',price: 5000},
    {productName: 'Mens Fashion',price: 350},
    {productName: 'Shoes',price: 800},
]

const Hoc = (WrappedComponent) => {
    class searchFunctionality extends React.Component{
        constructor(props){
            super(props);
            this.state={
                search: ''
            }

        }
        updateSearch = (e) =>{
            this.setState({search:e.target.value})
        }
        filterProducts = () => {
            return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
          }
          render(){
            const updatedProducts = this.filterProducts();
          return (
            <div>
                <input type="text" onChange={this.updateSearch}></input>
                <WrappedComponent products={updatedProducts} {...this.props}/>
            </div>
          )
    }
}
  return searchFunctionality;
}

export default Hoc;