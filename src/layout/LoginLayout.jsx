import React from 'react';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/Home/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default LoginLayout;