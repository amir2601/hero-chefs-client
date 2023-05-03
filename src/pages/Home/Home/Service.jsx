import React from 'react';

const Service = () => {
    return (
        <div className='w-5/6 mx-auto my-8'>
            <h2 className='text-3xl font-bold text-center'>Our Services</h2>
            <hr className='my-3' />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/3y608QZ/planning.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>Food Planning</h3>
                </div>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/gmN6Syn/meal.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>Food Delivery</h3>
                </div>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/QNYJBYz/catering.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>Catering</h3>
                </div>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/6Ybkd1f/baking.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>Cooking Class</h3>
                </div>
            </div>
        </div>
    );
};

export default Service;