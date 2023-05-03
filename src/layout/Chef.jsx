import React from 'react';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/Home/Shared/Footer/Footer';

const Chef = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Chef;