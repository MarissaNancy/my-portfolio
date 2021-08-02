import React from "react"
import hiking1 from "../Assets/hiking1.jpg"
import Skills from "./Skills"

export default function About() {
    return(
        <main className="bg-gray-800 min-h-screen p-12">
            <div className="rounded-lg p-10 lg:pt-48 container mx-auto relative">
                <section className="rounded-lg shadow-2xl lg:flex p-20 ">
                    <img src={hiking1} className="rounded-lg w-50 h-50 lg:w-64 lg:h-64 mr-8" alt="mountains in nature"/>
                    <div className="bg-pink">
                        <h1 className="text-4xl justify-center mb-4 text-white">
                        About me:
                        </h1>
                        <div className="text-2xl  justify-center text-white">
                        My name is Nancy and I am a passionate full stack web developer. Graduate from the University of California, Los Angeles with a Web Development Certificate. I was first introduced to coding back when MySpace was popular and everyone wanted to have the best layout. After doing some research I realized I could personalize my profile by altering the code and I was drawn into learning more. I liked creating web pages, and after learning more through UCLA my interst became more towards back-end development. The projects that I enjoyed creating most can be found in my projects page and I will continue to further develop them feel free to click here for my <a href="https://github.com/MarissaNancy" target="_blank"><span className= "text-blue-400 font-bold "> Github Link </span></a> and check my progress!
                        </div>
                        <div>
                            <Skills />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}