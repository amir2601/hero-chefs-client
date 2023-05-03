import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { _id, name, exp, likes, recipe_no, chef_img } = chef;
    return (
        <div>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure className="px-10 pt-10 md:p-4">
                    <LazyLoad height={200} width={200} threshold={1}>
                        <img src={chef_img} alt="Shoes" className="rounded-xl" />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <div>
                        <p>Years of experience: {exp}</p>
                        <p>Numbers of recipes: {recipe_no}</p>
                        <p>Likes: {likes}</p>
                    </div>
                    <Link to={`/chef/${_id}`}><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;