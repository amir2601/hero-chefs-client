import React from 'react';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../pages/Home/Shared/Header/Header';
import Footer from '../pages/Home/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;