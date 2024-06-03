import React from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";

const Products = () => {
  const params = useParams();
  let location = useLocation();
  console.log(params);
  console.log(location);

  const navigate = useNavigate();

  return (
    <>
      <h1>Products</h1>
      <button
        onClick={() => {
          return navigate("/");
        }}
      >
        Back To Home
      </button>
      {/* <nav>
        <span>
          <Link to="/products/1">Product 1 | </Link>
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
      </nav> */}
    </>
  );
};

export default Products;
