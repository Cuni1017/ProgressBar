import React, { Component } from "react";

class ProductsPage extends Component {
  constructor(props) {
    super(props);
  }

  //確定要秀products時再去抓，在App抓的話會浪費資源
  componentDidMount = () => {
    const { productService } = this.props;
    productService.getProductsFromServer();
  };

  render() {
    console.log("ProductsPage render");
    const { products } = this.props;
    const count = products.length;
    return <div>Has {count} products</div>;
  }
}

export default ProductsPage;
