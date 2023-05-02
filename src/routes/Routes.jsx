import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Blog from './../pages/Home/Shared/Blog/Blog';
import Chef from '../layout/Chef';
import ChefDetails from '../pages/ChefDetails/ChefDetails';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/chef`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: "/chef",
        element: <Chef></Chef>,
        errorElement: <Error></Error>,
        children: [
            {
                path: ":id",
                element: <ChefDetails></ChefDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
]);

export default router;