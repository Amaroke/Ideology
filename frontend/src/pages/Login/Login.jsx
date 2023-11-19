import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import AuthenticationService from "../../services/AuthenticationService";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const formDataLower = {
                    email: formData.email.toLowerCase(),
                    password: formData.password,
                };

                const response = await AuthenticationService.login(formDataLower, document.getElementById('remember').checked ? 365 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000);

                const cookieDuration = document.getElementById('remember').checked ? { expires: 365 } : {};
                Cookies.set('jwtToken', response.token, { secure: true, sameSite: 'strict', ...cookieDuration });

                navigate('/home');
            } catch (error) {
                setErrors({ general: 'Authentication failed. Please check your credentials.' });
            }
        }
    };

    return (
        <section className="background-image bg-cover bg-no-repeat">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center">
                            Log in
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="email@adress.com"
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ${errors.password ? 'border-red-500' : ''}`}
                                    placeholder="••••••••"
                                    required
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-600 rounded bg-gray-50 focus:ring-3 focus:ring-primary-600    ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <Link to="/forgot-password" className="text-sm font-medium text-primary-500 hover:underline">Forgot password?</Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Log in
                            </button>
                            {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
                            <p className="text-sm font-light text-gray-400 text-center">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-primary-500 hover:underline">Register</Link>
                            </p>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
