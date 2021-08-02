import React from "react"
import image from "../Assets/pic.jpg"
import Resume from "../Assets/Resume.pdf"
import ResumeLink from "../components/ResumeLink"

export default function Home() {
    return (
        <main>
            <img src={image} alt="beach background" className="absolute object-cover w-full h-full"/>
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-800 leading-none lg:leading-snug flex justify-center font-bold ">Welcome to Nancy's portfolio!</h1>
                <div>
                <p className="text-3xl text-gray-800 flex justify-center m-5">
                Full-stack web developer with a focus on back-end development and an interest in React. This portfolio was built with React, React-DOM, Javascript, and React Social Icons. Navigate to my projects page to learn more about my other work and click on my other links to connect with me!</p>
                </div>
                <div>
                <p className="text-gray-800 font-bold text-center text-3xl">In a rush? Click <span className= "text-red-900 font-bold "><a href={Resume} target="_blank" rel="noopener noreferrer"> here</a></span> to view my resume</p>
                </div>
            </section>
        
        </main>
    )
}