import { createBrowserRouter } from "react-router-dom";
import ReadBooks from "../components/ListedBooks/ReadBooks";
import WishlistBooks from "../components/ListedBooks/WishlistBooks";
import MainLayout from "../layouts/MainLayout";
import BestSellerPage from "../pages/BestSellerPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ListedBooksPage from "../pages/ListedBooksPage";
import PagesToReadPage from "../pages/PagesToReadPage";
import SearchPage from "../pages/SearchPage";
import { getReadBooks, getWishlistBooks } from "../utils";

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
        path: "/:id",
        element: <BookDetailsPage />,
        loader: () => fetch(`books.json`),
      },
      {
        path: "/listed-books",
        element: <ListedBooksPage />,
        loader: () => fetch(`books.json`),
        children: [
          {
            index: true,
            element: <ReadBooks />,
            loader: () => new Promise((resolve) => resolve(getReadBooks())),
          },
          {
            path: "wishlist",
            element: <WishlistBooks />,
            loader: () => new Promise((resolve) => resolve(getWishlistBooks())),
          },
        ],
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
    ],
  },
]);
