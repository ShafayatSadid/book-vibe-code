import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import BookPage from "../pages/BooksPage/BookPage";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, Component: Home },
      { path: 'books', Component: BookPage }
    ],
    errorElement: <ErrorPage />
  }
])

