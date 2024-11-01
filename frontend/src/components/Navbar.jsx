import { Link, useLocation } from "react-router-dom"

export default function Navbar(){

    const location = useLocation();
    const path = location.pathname;
    const isActive = (pathname) => {
        return pathname === path;
      };

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">EasyHome</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/home" className={`mr-5 hover:text-gray-900 ${isActive('/home') ? 'text-blue-500' : ''}`}>Accueil</Link>
                    <Link to="/about" className={`mr-5 hover:text-gray-900 ${isActive('/about') ? 'text-blue-500' : ''}`}>A propos</Link>
                    <Link to="/contactus" className={`mr-5 hover:text-gray-900 ${isActive('/contactus') ? 'text-blue-500' : ''}`}>Contactez-nous</Link>
                    <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Connexion
                    </Link>
                </nav>
            </div>
        </header>
    )
}