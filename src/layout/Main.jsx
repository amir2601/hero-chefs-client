import React from 'react';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;