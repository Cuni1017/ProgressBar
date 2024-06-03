import React, { useEffect } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: "http://localhost:8888/", // Your store URL
  consumerKey: "ck_5a7241eaeccd9a07fd299b33dfa884f14fdaf208", // Your consumer key
  consumerSecret: "cs_65ef1c4eccbced755a0d0cda2c27bac7f8888266", // Your consumer secret
  version: "wc/v3", // WooCommerce WP REST API version
});

const App = () => {
  useEffect(() => {
    WooCommerce.get("products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return <div>123</div>;
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render = () => {
//     return <div>App Component</div>;
//   };
// }

export default App;
