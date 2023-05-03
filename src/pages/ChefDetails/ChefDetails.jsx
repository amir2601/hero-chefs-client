import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const [fav, setFav] = useState(false);
    const [fav2, setFav2] = useState(false);
    const [fav3, setFav3] = useState(false);

    const handleFav = () => {
        setFav(!fav);
        toast("Favorite Added");
    };
    const handleFav2 = () => {
        setFav2(!fav2);
        toast("Favorite Added");
    };
    const handleFav3 = () => {
        setFav3(!fav3);
        toast("Favorite Added");
    };

    const chefDetails = useLoaderData()
    const { _id, name, bio, exp, likes, recipe_no, chef_img, recipe1, recipe2, recipe3 } = chefDetails;

    return (

        <div>
            {/* Header Section */}
            <div className="hero bg-base-300 md:w-5/6 mx-auto md:h-full ">
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

            <div className="hero bg-sky-100 shadow-xl mt-8 md:w-5/6 mx-auto md:h-full rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipe1.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex justify-between'>
                            <h1 className="text-4xl font-bold mb-3">{recipe1.name}</h1>
                            <button onClick={handleFav} disabled={fav} className="btn btn-primary">Add to Favorite</button>
                        </div>
                        {
                            recipe1.ingredients.map(i => <li>{i}</li>)
                        }
                        <p className="py-6"><small>{recipe1.cooking_method}</small></p>
                        <div className='md:flex justify-between'>
                            <h4 className='text-lg font-bold'>Rating: {recipe1.rating}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-sky-100 shadow-xl mt-8 md:w-5/6 mx-auto md:h-full rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipe2.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex justify-between'>
                            <h1 className="text-4xl font-bold mb-3">{recipe2.name}</h1>
                            <button onClick={handleFav2} disabled={fav2} className="btn btn-primary">Add to Favorite</button>
                        </div>
                        {
                            recipe2.ingredients.map(i => <li>{i}</li>)
                        }
                        <p className="py-6"><small>{recipe2.cooking_method}</small></p>
                        <div className='md:flex justify-between'>
                            <h4 className='text-lg font-bold'>Rating: {recipe2.rating}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-sky-100 shadow-xl mt-8 md:w-5/6 mx-auto md:h-full rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recipe3.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='flex justify-between'>
                            <h1 className="text-4xl font-bold mb-3">{recipe3.name}</h1>
                            <button onClick={handleFav3} disabled={fav3} className="btn btn-primary">Add to Favorite</button>
                        </div>
                        {
                            recipe3.ingredients.map(i => <li>{i}</li>)
                        }
                        <p className="py-6"><small>{recipe3.cooking_method}</small></p>
                        <div className='md:flex justify-between'>
                            <h4 className='text-lg font-bold'>Rating: {recipe3.rating}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefDetails;