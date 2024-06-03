import React, { Component } from "react"; //node_modules會自己對應
import ReactDOM from "react-dom";
// import Nav from "./layout/Nav.jsx";
// import NavRoutes from "./configs/NavRoutes.json";
import UserService from "./utils/UserService.js";
import ProductService from "./utils/ProductService.js";
// import PathService from "./utils/PathService.js"; //模仿SPA -> 改用react-router來做
import AppRouter from "./layout/AppRouter.jsx";
import Nav from "./layout/Nav.jsx";

const userService = new UserService();
const productService = new ProductService();
// const pathService = new PathService(); //模仿SPA -> 改用react-router來做

// import Content from "./Content.jsx";

// 顯示的核心內容會是App來控制 透過App.state去傳遞他的state當作子孫的props
// 子孫會有它自己的state，不過大多都是用來做UI上的控制，例如小動畫之類的

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(window.location.pathname); //取得路徑
    this.state = {
      // path: pathService.path, //模仿SPA -> 改用react-router來做
      user: userService.currentUser,
      products: productService.products,
    };
    // this.pages = {         //放在這裡的話state會被固定住，取得不了user資訊
    //   "/": <HomePage />,
    //   "/products/": <ProductsPage />,
    //   "/cart/": <CartPage />,
    //   "/user/": <UserPage user={this.state.user} />,
    //   "/user/logIn/": (
    //     <LoginPage user={this.state.user} userService={userService} />
    //   ),
    // };
    //                    註冊方法
    userService.register((user) => {
      this.setState({ user: user });
    });

    productService.register((products) => {
      this.setState({ products: products });
    });

    // pathService.resgister((path) => {
    //   this.setState({ path: path });
    // });
  }

  //   getPath = (key) => {
  //     const path = {
  //       "/": <HomePage />,
  //       "/products/": (
  //         <ProductsPage
  //           products={this.state.products}
  //           productService={productService}
  //         />
  //       ),
  //       "/cart/": <CartPage />,
  //       "/user/": <UserPage user={this.state.user} />,
  //       "/user/logIn/": (
  //         <LoginPage user={this.state.user} userService={userService} />
  //       ),
  //     };
  //     return path[key];
  //   };

  render = () => {
    // console.log("App render");
    // console.log(this.state);
    // let page = this.getPath(this.state.path); //取得location後的路徑後傳入getPath拿取頁面
    // //如果user有撈到就導向UserPage
    // if (this.state.user.id) {
    //   page = this.getPath("/user/");
    // }
    // //如果還沒登入就想看UserPage就導向LoginPage
    // if (this.state.path == "/user/" && !this.state.user.id) {
    //   page = this.getPath("/user/logIn/");
    // }
    return (
      <div>
        {/* Link一定要在Router裡面 => Nav要被AppRouter包住 */}
        <AppRouter
          userService={userService}
          user={this.state.user}
          productService={productService}
          products={this.state.products}
        >
          <Nav
            userService={userService}
            user={this.state.user}
            productService={productService}
            products={this.state.products}
          />
        </AppRouter>
        {/* 改用react-router */}
        {/* 將所有state送進Nav讓他判斷是否要重新render -> Nav shouldComponentUpdate
        <Nav navRoutes={NavRoutes} {...this.state} pathService={pathService} />
        {page} */}
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
