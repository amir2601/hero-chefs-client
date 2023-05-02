import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);

    return (
        <div className='w-5/6 mx-auto grid md:grid-cols-3 gap-6 mt-5'>
            {
                chefs.map(chef => <ChefCard key={chef._id} chef={chef}></ChefCard>)
            }
        </div>
    );
};

export default Home;