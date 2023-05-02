import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="hero h-[40vh] w-5/6 mx-auto" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold">Hero Chefs</h1>
                        <p className="mb-5 text-lg">We believe that cooking should be enjoyable and accessible to everyone, which is why we create recipes that are simple, yet impressive.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;