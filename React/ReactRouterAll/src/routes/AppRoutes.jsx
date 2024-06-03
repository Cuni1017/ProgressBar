import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Features from "../pages/Features";
import NotFound from "../pages/NotFound";
import ProductLayout from "../pages/ProductLayout";
import { createBrowserRouter } from "react-router-dom";

// 方式一 在App使用useRoutes
const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductLayout />,
    children: [
      {
        path: "", //path為空表示index
        element: <Products />,
      },
      {
        path: ":id", //path為空表示index
        element: <Product />,
      },
      {
        path: "features", //path為空表示index
        element: <Features />,
      },
    ],
  },
];

// 方式二 createBrowserRouter搭配RouterProvider
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductLayout />,
    children: [
      {
        path: "", //path為空表示index
        element: <Products />,
      },
      {
        path: ":id", //path為空表示index
        element: <Product />,
      },
      {
        path: "features", //path為空表示index
        element: <Features />,
      },
    ],
  },
]);

export default AppRoutes;
