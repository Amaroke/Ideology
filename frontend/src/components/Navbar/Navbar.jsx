import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {

    const logout = () => {
        Cookies.remove('jwtToken');
    }

    return (
        <nav className="bg-gray-950 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Ideology</div>
                <ul className="flex space-x-4">
                    <li><Link to="/login" className="text-white">Connexion</Link></li>
                    <li><Link to="/register" className="text-white">Inscription</Link></li>
                    <li><Link to="/forgot-password" className="text-white">Mot de passe oublié</Link></li>
                    <li><button onClick={logout()} className="text-white">Déconnexion</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
