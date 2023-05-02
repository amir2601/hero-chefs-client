import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Blog from './../pages/Home/Shared/Blog/Blog';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        }
      ]
    },
  ]);

export default router;