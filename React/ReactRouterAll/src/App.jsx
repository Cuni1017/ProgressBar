import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./pages/Header";
import {
  Routes,
  Route,
  useRoutes,
  Outlet,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";

import AppRoutes from "./routes/AppRoutes";

import ProductLayout from "./pages/ProductLayout";
// 如果要使用巢狀Route要放Outlet，底下的Route的element不會渲染

import ProtectedRoutes from "./routes/ProtectedRoutes";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";

import { router } from "./routes/AppRoutes";

const permissions = {
  User: "user",
  Admin: "admin",
};

function App() {
  const [user, setUser] = useState({
    isLogin: true,
    permission: ["admin"],
  });

  // const AppRouting = useRoutes(AppRoutes);
  // console.log(AppRouting, "hi");

  return (
    <RouterProvider router={router}>
      <div className="App">
        <Header />
        {/* 方式三 useRoutes 感覺小專案應該不太需要*/}
        {/* {AppRouting} */}

        {/* 方式一 */}
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/:test" element={<Product />} />
      </Routes> */}

        {/* // 方式二 巢狀 */}
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="features" element={<Features />} />
        </Route> */}

        {/* 權限管理 */}
        {/* 一般使用者user登入後可訪問 */}
        {/* <Route
          element={
            <ProtectedRoutes
              user={user}
              permissions={[permissions.User, permissions.Admin]}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
        {/* 管理員admin登入後可以訪問 */}
        {/* <Route
          element={
            <ProtectedRoutes user={user} permissions={[permissions.Admin]} />
          }
        >
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      </div>
    </RouterProvider>
  );
}

export default App;
