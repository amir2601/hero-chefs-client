import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            const loggedUser = result.user;
            navigate(from, { replace: true })
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        form.reset();

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-[90vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-red-500">{error}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <p className="label-text-alt">Don't have an account? <Link className='text-blue-400' to="/register" state={{ from: { from } }} replace>Create an account</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="form-control my-3">
                                <button onClick={handleGoogleLogin} className="btn btn-outline" ><FaGoogle className='text-xl me-3'></FaGoogle> Login With Google</button>
                            </div>
                            <div className="form-control">
                                <button onClick={handleGithubLogin} className="btn btn-outline"><FaGithub className='text-xl me-3'></FaGithub> Login With Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;