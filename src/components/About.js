import React from "react"
import hiking1 from "../Assets/hiking1.jpg"
import AboutMe from "./AboutMe"

export default function About() {
    return(
        <main className="bg-gray-800 min-h-screen p-12">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="rounded-lg shadow-2xl lg:flex p-20 ">
                    <img src={hiking1} className="rounded w-50 h-50 lg:w-64 lg:h-64 mr-8" alt="mountains in nature"/>
                    <div className="bg-pink">
                        <h1 className="text-4xl justify-center mb-4 text-white">
                        About me:
                        </h1>
                        <div className="text-2xl  justify-center text-white">
                        My name is Nancy and I am a passionate full stack web developer. Graduate from the University of California, Los Angeles with a Web Development Certificate. Strong ability to design websites utilizing a combination of strong communication, analytical skills, research and problem solving skills. Other newly developed skills in Javascript, React, and responsive web design. My interest include developing data-basses, back-end development, and building meaningful user friendly websites!
                        </div>
                        <div>
                            <AboutMe />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}