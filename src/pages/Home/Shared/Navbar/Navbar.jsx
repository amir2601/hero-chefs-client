import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-5/6 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/"><p>Home</p></Link></li>
                            <li><Link to="/blog"><p>Blog</p></Link></li>
                            <p onClick={handleLogout} className="btn">Log Out</p>
                        </ul>
                    </div>
                    <img className='h-10 md:h-16' src="https://i.ibb.co/cvmhDSH/cooking.png" alt="" />
                    <Link to="/" className="btn btn-ghost normal-case font-bold text-3xl">Hero Chefs</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"><p>Home</p></Link></li>
                        <li><Link to="/blog"><p>Blog</p></Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className='flex gap-3'>
                        <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                            <img className='rounded-full w-12 h-12' src={user.photoURL} />
                        </div>
                        <p onClick={handleLogout} className="btn hidden lg:flex">Log Out</p>
                    </div> : <Link to="/login"><p className="btn">Login</p></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;