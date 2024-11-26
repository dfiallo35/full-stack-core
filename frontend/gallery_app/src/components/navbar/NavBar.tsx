import { useState } from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="bg-white w-full border-b-[1px] border-slate-300 sticky top-0 z-40">
            <nav className="py-4 px-6 container mx-auto">
                <div className="flex flex-row justify-between items-center">
                    {/* Logo or Brand Name */}
                    <Link to="/" className="text-white font-bold text-3xl my-2">
                        <img src="/logo.png" alt="logo" className="h-10 w-auto" />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex md:flex-row flex-col md:space-x-4 md:mt-0 mt-4 items-center text-xl">
                        <Link to="/" className="text-black font-bold text-xl px-4 py-2 hover:text-red-400">Home</Link>
                        <Link to="/gallery" className="text-black font-bold text-xl px-4 py-2 hover:text-red-400">Gallery</Link>
                        <Link to="/about" className="text-black font-bold text-xl px-4 py-2 hover:text-red-400">About</Link>
                        <Link to="/contact" className="text-black font-bold text-xl px-4 py-2 hover:text-red-400">Contact</Link>
                    </div>

                    {/* Sidebar Toggle Button*/}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Drop Down Navigation Links */}
            {
                isOpen && 
                 <div className="md:hidden absolute bg-white border-r-2 text-white w-auto h-screen top-0 left-0 z-10 p-4 flex flex-col justify-between transition-transform transform translate-x-0 duration-300 ease-in-out">
                    <div className="px-4">
                        <Link to="/" className="text-white font-bold text-3xl">
                            <img src="/logo.png" alt="logo" className="h-10 w-auto" />
                        </Link>
                        <ul className="mt-20">
                            <Link to="/" className="block text-black font-bold text-xl py-2 hover:text-red-400">Home</Link>
                            <Link to="/gallery" className="block text-black font-bold text-xl py-2 hover:text-red-400">Gallery</Link>
                            <Link to="/about" className="block text-black font-bold text-xl py-2 hover:text-red-400">About</Link>
                            <Link to="/contact" className="block text-black font-bold text-xl py-2 hover:text-red-400">Contact</Link>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
