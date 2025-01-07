import { Link } from "react-router-dom";
import { useState } from "react";

/* eslint-disable react/prop-types */
function Navbar() {
    return (
        <nav className="bg-cyan-200 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="h-16" alt="Bungkus Logo" />
                    <span className="hidden">Bungkus</span>
                </Link>
                <Button />
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-cyan-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <Menu href="/">Home</Menu>
                        <DropdownMenu title="Product">
                            <DropdownItems />
                        </DropdownMenu>
                        <Menu href="/portfolio">Portfolio</Menu>
                        <Menu href="/about">About</Menu>
                        <Menu href="/contact">Contact</Menu>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const Menu = (props) => {
    return (
        <li>
            <Link to={props.href} className="block py-2 px-3 text-black rounded md:bg-transparent hover:bg-cyan-300 md:p-0" aria-current="page">{props.children}</Link>
        </li>
    );
};

function DropdownMenu({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="relative">
            <button
                onClick={toggleDropdown}
                className="py-2 px-3 text-black rounded md:bg-transparent md:p-0 flex items-center space-x-2"
            >
                {title}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 z-10 bg-cyan-400 divide-y divide-gray-100 rounded-lg shadow w-44">
                    {children}
                </div>
            )}
        </li>
    );
}

function DropdownItems() {
    return (
        <ul className="py-2 text-sm text-gray-700">
            <li>
                <Link to="/category/soft-box" className="block px-4 py-2 hover:bg-cyan-300">Soft Box</Link>
            </li>
            <li>
                <Link to="/category/hard-box" className="block px-4 py-2 hover:bg-cyan-300">Hard Box</Link>
            </li>
            <li>
                <Link to="/category/corrugated-box" className="block px-4 py-2 hover:bg-cyan-300">Corrugated Box</Link>
            </li>
        </ul>
    );
}

function Button() {
    return (
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
        >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    );
}

export default Navbar;
