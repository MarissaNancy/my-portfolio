import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-green-900 rounded-lg">
            <div className="container mx-auto flex justify-around">
                <nav className="text-3xl">
                    <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 mr-4 text-gray-900 font-bold ">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-900 font-bold ">
                        About Me
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-900 font-bold ">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-900 font-bold ">
                        Contact
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon url="https://github.com/MarissaNancy" className="mr-4" target="_blank" style={{ height: 50, width: 50}} />
                    <SocialIcon url="https://www.linkedin.com/in/nancy-m-gonzalez/" className="mr-4" target="_blank" style={{ height: 50, width: 50}}/>
                    <SocialIcon url="mailto:nancy.m.gonzalez.j@gmail.com" className="mr-4" target="_blank" style={{ height: 50, width: 50}}/>
                    </div>
            </div>
        </header>
    )
}