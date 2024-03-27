import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ListedBooksPage from "../pages/ListedBooksPage";
import PagesToReadPage from "../pages/PagesToReadPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/listed-books",
        element: <ListedBooksPage />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToReadPage />,
      },
    ],
  },
]);
