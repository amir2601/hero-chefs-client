import React from 'react';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ChefHeader from '../pages/ChefDetails/ChefHeader';

const Details = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ChefHeader></ChefHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Details;