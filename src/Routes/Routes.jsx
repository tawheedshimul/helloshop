import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ProductPage from "../Pages/Home/ProductCategory/ProductPage";
import SubcategoryPage from "../Pages/Home/ProductCategory/SubcategoryPage";
import CategoryPage from "../Pages/Home/ProductCategory/CategoryPage";
import Home from "../Pages/Home/Home/Home";
import CustomerCare from "../Pages/CustomerCare/CustomerCare";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/categories",
        element: <CategoryPage />, // Categories Page
      },
      {
        path: "/subcategory/:categoryId",
        element: <SubcategoryPage />, // Subcategories Page
      },
      {
        path: "/products/:subcategoryId",
        element: <ProductPage />, // Products Page
      },
      {
        path: "/customer-care",
        element: <CustomerCare/>, // Products Page
      },
    ],
  },
]);
