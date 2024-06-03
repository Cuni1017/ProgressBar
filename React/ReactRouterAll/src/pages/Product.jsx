import React from "react";
import {
  useLocation,
  useParams,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";

// useParams只接Route寫的path="/:"後的東西，可以很多個

const Product = () => {
  const outletContext = useOutletContext();
  console.log(outletContext, "hi");

  const params = useParams();
  const location = useLocation();
  const { id } = params;
  console.log(params);
  console.log(location);

  // 這裡一定要用[]接第一個回傳的
  // 因為useSearchParams()會回傳兩個
  const [searchParams, what] = useSearchParams();
  // console.log(searchParams);
  // console.log(what);
  console.log(searchParams.get("test")); //http://localhost:5173/products/3?test=456 只會抓第一個
  console.log(searchParams.getAll("test")); //http://localhost:5173/products/3?test=456&test=123

  return <h1>Product {id}</h1>;
};

export default Product;
