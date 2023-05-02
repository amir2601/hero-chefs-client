import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Blog from './../pages/Home/Shared/Blog/Blog';
import Details from '../layout/Details';
import Recipe from '../pages/Recipe/Recipe';

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
    {
        path: "/details",
        element: <Details></Details>,
        children: [
            {
                path: ":id",
                element: <Recipe></Recipe>
            }
        ]
    }
  ]);

export default router;