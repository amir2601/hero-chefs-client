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
import Login from '../pages/Login/Login';
import LoginLayout from '../layout/LoginLayout';
import Register from '../pages/Register.jsx/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
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
    },
    {
        path: "/home",
        element: <Home></Home>,
        errorElement: <Error></Error>,
        loader: () => fetch(`http://localhost:5000/chef`)
    }
]);

export default router;