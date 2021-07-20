import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-400">
            <div className="container mx-auto flex justify-around">
                <nav>
                    <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 mr-4 text-white ">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-4 text-white ">
                        About Me!
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-6 px-3 mr-4 text-white ">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className="inflex-flex items-center py-6 px-3 mr-4 text-white ">
                        Contact
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon url="https://github.com/MarissaNancy" className="mr-4" target="_blank" style={{ height: 30, width: 30}} />
                    <SocialIcon url="https://www.linkedin.com/in/nancy-m-gonzalez/" className="mr-4" target="_blank" style={{ height: 30, width: 30}}/>
                    </div>
            </div>
        </header>
    )
}