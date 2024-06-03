import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  //   redirect,  //用navigate
} from "react-router-dom";
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";
import Drawer, { DrawerAppContent } from "@material/react-drawer";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  //   linkHandler = (e) => {
  //     e.preventDefault(); //讓連結無法使用

  //     const { href } = e.target; //抓連結網址
  //     const { pathService } = this.props;
  //     pathService.setPath(href); //使用pathService設址
  //   };

  //   createPagesLinks = (navRoutes) => {
  //     return navRoutes.map((navRoute) => {
  //       return (
  //         <li key={navRoute.name}>
  //           {/* 模仿SPA 讓連結沒辦法使用 */}
  //           <a href={navRoute.url} onClick={this.linkHandler}>
  //             {navRoute.name}
  //           </a>
  //         </li>
  //       );
  //     });
  //   };

  //   shouldComponentUpdate = (nextProps, nextState) => {
  //     // console.log("Nav shouldComponentUpdate start");
  //     // console.log(this.props);
  //     // console.log(nextProps);
  //     // // console.log(nextState);
  //     // console.log("Nav shouldComponentUpdate end");
  //     //預設是true，改false讓他避免不必要的重Render
  //     if (this.props.user != nextProps.user) {
  //       return true;
  //     }
  //     return false;
  //   };

  closeDrawer = () => {
    this.setState({ open: false });
  };

  render = () => {
    // console.log("Nav render");
    // const { navRoutes } = this.props;
    // const links = this.createPagesLinks(navRoutes);
    // return <ul>{links}</ul>;
    return (
      <React.Fragment>
        <Drawer modal open={this.state.open} onClose={this.closeDrawer}>
          {/* <SomeDrawerContent /> */}
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={this.closeDrawer}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products/" onClick={this.closeDrawer}>
                  Products
                </Link>
              </li>
              {this.props.user.id > 0 ? (
                // 用div包起來的話會影響CSS，改用 React.Fragment，也不會引響內容
                <React.Fragment>
                  <li>
                    <Link to="/cart/" onClick={this.closeDrawer}>
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/" onClick={this.closeDrawer}>
                      Profile
                    </Link>
                  </li>
                </React.Fragment>
              ) : (
                <li>
                  <Link to="/user/logIn" onClick={this.closeDrawer}>
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </Drawer>
        {/* <div>
          Your really cool app content here
          <button onClick={() => this.setState({ open: !this.state.open })}>
            {this.state.open ? "Open" : "Close"} Drawer
          </button>
        </div> 
        將clickFunction移到漢堡包的onClick*/}

        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align="start">
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  hasRipple
                  icon="menu"
                  onClick={() => this.setState({ open: !this.state.open })}
                />
              </TopAppBarIcon>
              <TopAppBarTitle>Miami, FL</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align="end" role="toolbar">
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon
                  aria-label="print page"
                  hasRipple
                  icon="print"
                  onClick={() => console.log("print")}
                />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        {/* <TopAppBarFixedAdjust>My exciting content!</TopAppBarFixedAdjust> 移到Router不然會有兩個main*/}
      </React.Fragment>
    );
  };
}

export default Nav;
