import { createBrowserRouter } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom"; // Import ScrollRestoration
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductCardPage from "../Pages/Product/ProductPage/ProductCardPage.";
import ProductDetailsPage from "../Pages/Shared/ProductDetailsPage/ProductDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <>
        <ScrollRestoration /> {/* Add this inside your layout component */}
        <Main />
      </>
    ), // Main layout
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/men",
        element: <ProductCardPage />, // Subcategories Page
      },
      {
        path: "/product/:id",
        element: <ProductDetailsPage />, // Product Details Page
        loader: async ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`).then(res => res.json()),
      },
    ],
  },
]);
