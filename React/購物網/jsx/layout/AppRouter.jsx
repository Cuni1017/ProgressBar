import React, { Component } from "react";
import HomePage from "../home/HomePage.jsx";
import UserPage from "../user/UserPage.jsx";
import ProductsPage from "../products/ProductsPage.jsx";
import CartPage from "../cart/CartPage.jsx";
import LoginPage from "../user/LoginPage.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  //   redirect,  //舊的，用Navigate
} from "react-router-dom";

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    console.log(this.props.children);
    return (
      <Router>
        {this.props.children}
        <main className="mdc-top-app-bar--fixed-adjust">
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/products/"
                element={
                  <ProductsPage
                    productService={this.props.productService}
                    products={this.props.products}
                  />
                }
              />
              <Route
                path="/cart/"
                element={
                  this.props.userService.isLoggedIn() ? (
                    <CartPage
                      userService={this.props.userService}
                      user={this.props.user}
                      productService={this.props.productService}
                      products={this.props.products}
                    />
                  ) : (
                    <Navigate to="/user/logIn/" />
                  )
                }
              />
              <Route
                path="/user/"
                element={
                  this.props.userService.isLoggedIn() ? (
                    <UserPage
                      userService={this.props.userService}
                      user={this.props.user}
                    />
                  ) : (
                    <Navigate to="/user/logIn/" />
                  )
                }
              />
              <Route
                path="/user/logIn/"
                element={
                  this.props.userService.isLoggedIn() ? (
                    <Navigate to="/user/" />
                  ) : (
                    <LoginPage
                      userService={this.props.userService}
                      user={this.props.user}
                    />
                  )
                }
              />
            </Routes>
          </div>
        </main>
      </Router>
    );
  }
}

export default AppRouter;
