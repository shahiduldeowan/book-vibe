import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BestSellerPage from "../pages/BestSellerPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ListedBooksPage from "../pages/ListedBooksPage";
import PagesToReadPage from "../pages/PagesToReadPage";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("books.json"),
      },

      {
        path: "/listed-books",
        element: <ListedBooksPage />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToReadPage />,
      },
      {
        path: "/best-seller",
        element: <BestSellerPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetailsPage />,
        loader: () => fetch(`books.json`),
      },
    ],
  },
]);
