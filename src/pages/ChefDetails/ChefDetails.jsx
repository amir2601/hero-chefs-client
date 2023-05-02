import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    console.log(chefDetails);
    const { _id, name, bio, exp, likes, recipe_no, chef_img, recipe1, recipe2, recipe3 } = chefDetails;

    return (

        <div>
            {/* Header Section */}
            <div className="hero bg-base-300 md:w-5/6 mx-auto md:h-[60vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chef_img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{bio}</p>
                        <h4 className='text-lg font-bold'>Likes: {likes}</h4>
                        <h4 className='text-lg font-bold'>Numbers of recipes: {recipe_no}</h4>
                        <h4 className='text-lg font-bold'>Years of experience: {exp}</h4>
                    </div>
                </div>
            </div>

            {/* recipe section */}

            <div className="hero bg-blue-200 mt-8 md:w-5/6 mx-auto md:h-[70vh] rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipe1.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold mb-3">{recipe1.name}</h1>
                        {
                            recipe1.ingredients.map(i => <li>{i}</li>)
                        }
                        <p className="py-6"><small>{recipe1.cooking_method}</small></p>
                        <div className='md:flex justify-between'>
                            <h4 className='text-lg font-bold'>Likes: {likes}</h4>
                            <h4 className='text-lg font-bold'>Numbers of recipes: {recipe_no}</h4>
                            <h4 className='text-lg font-bold'>Years of experience: {exp}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-blue-200 mt-8 md:w-5/6 mx-auto md:h-[70vh] rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipe2.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold mb-3">{recipe2.name}</h1>
                        {
                            recipe2.ingredients.map(i => <li>{i}</li>)
                        }
                        <p className="py-6"><small>{recipe2.cooking_method}</small></p>
                        <div className='md:flex justify-between'>
                            <h4 className='text-lg font-bold'>Likes: {likes}</h4>
                            <h4 className='text-lg font-bold'>Numbers of recipes: {recipe_no}</h4>
                            <h4 className='text-lg font-bold'>Years of experience: {exp}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-blue-200 mt-8 md:w-5/6 mx-auto md:h-[70vh] rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipe3.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold mb-3">{recipe3.name}</h1>
                        {
                            recipe3.ingredients.map(i => <li>{i}</li>)
                        }
                        <p className="py-6"><small>{recipe3.cooking_method}</small></p>
                        <div className='md:flex justify-between'>
                            <h4 className='text-lg font-bold'>Likes: {likes}</h4>
                            <h4 className='text-lg font-bold'>Numbers of recipes: {recipe_no}</h4>
                            <h4 className='text-lg font-bold'>Years of experience: {exp}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;