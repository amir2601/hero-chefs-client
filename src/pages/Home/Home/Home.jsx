import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-5/6 mx-auto grid md:grid-cols-3 gap-6'>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure className="px-10 pt-10 md:p-0">
                    <img src="https://i.ibb.co/JrtNQPH/saif-hasan.jpg" alt="Shoes" className="rounded-xl md:h-[75%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: </h2>
                    <div>
                        <p>Years of experience: 10</p>
                        <p>Numbers of recipes: 12</p>
                        <p>Likes: 400</p>
                    </div>
                    <Link to="/details"><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure className="px-10 pt-10 md:p-0">
                    <img src="https://i.ibb.co/JrtNQPH/saif-hasan.jpg" alt="Shoes" className="rounded-xl md:h-[75%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: </h2>
                    <div>
                        <p>Years of experience: 10</p>
                        <p>Numbers of recipes: 12</p>
                        <p>Likes: 400</p>
                    </div>
                    <Link to="/details"><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure className="px-10 pt-10 md:p-0">
                    <img src="https://i.ibb.co/JrtNQPH/saif-hasan.jpg" alt="Shoes" className="rounded-xl md:h-[75%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: </h2>
                    <div>
                        <p>Years of experience: 10</p>
                        <p>Numbers of recipes: 12</p>
                        <p>Likes: 400</p>
                    </div>
                    <Link to="/details"><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure className="px-10 pt-10 md:p-0">
                    <img src="https://i.ibb.co/JrtNQPH/saif-hasan.jpg" alt="Shoes" className="rounded-xl md:h-[75%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: </h2>
                    <div>
                        <p>Years of experience: 10</p>
                        <p>Numbers of recipes: 12</p>
                        <p>Likes: 400</p>
                    </div>
                    <Link to="/details"><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure className="px-10 pt-10 md:p-0">
                    <img src="https://i.ibb.co/JrtNQPH/saif-hasan.jpg" alt="Shoes" className="rounded-xl md:h-[75%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: </h2>
                    <div>
                        <p>Years of experience: 10</p>
                        <p>Numbers of recipes: 12</p>
                        <p>Likes: 400</p>
                    </div>
                    <Link to="/details"><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
            <div className="card w-full bg-base-200 shadow-xl">
                <figure className="px-10 pt-10 md:p-0">
                    <img src="https://i.ibb.co/JrtNQPH/saif-hasan.jpg" alt="Shoes" className="rounded-xl md:h-[75%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: </h2>
                    <div>
                        <p>Years of experience: 10</p>
                        <p>Numbers of recipes: 12</p>
                        <p>Likes: 400</p>
                    </div>
                    <Link to="/details"><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;