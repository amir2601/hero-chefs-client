import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='w-5/6 mx-auto grid md:grid-cols-3 gap-6 mt-5'>
                {
                    chefs.map(chef => <ChefCard key={chef._id} chef={chef}></ChefCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;