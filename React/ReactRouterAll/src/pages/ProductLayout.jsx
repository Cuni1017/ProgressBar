import React from "react";
import { Link, Outlet } from "react-router-dom";
// 如果要使用巢狀Route要放Outlet，不然Product的東西出不來
// Outlet也可以傳遞參數 => context

const ProductLayout = () => {
  return (
    <>
      <nav>
        <span>
          <Link to="/products/1" state={{ product: "1" }}>
            Product 1 |{" "}
          </Link>
        </span>
        <span>
          <Link to="/products/2">Product 2 | </Link>
        </span>
        <span>
          <Link to="/products/3">Product 3 | </Link>
        </span>
        <span>
          <Link to="/products/features">Product Features </Link>
        </span>
      </nav>
      <Outlet context={{ name: "Outlet context" }} />
    </>
  );
};

export default ProductLayout;
