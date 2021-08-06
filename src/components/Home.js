import React from "react"
import image from "../Assets/bg.png"
import logo from "../Assets/logo.png"


export default function Home() {
    return (
        <main>
            <img src={image} alt="beach background" className="absolute object-cover w-full h-full"/>
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
            <img src={logo} alt="logo" className="flex align-items-center justify-content-center"/>
                <h1 className="text-4xl text-white leading-none lg:leading-snug flex justify-center font-bold ">Welcome to my portfolio!</h1>
                <div>
                <p className="text-2xl text-white flex justify-center m-5">
                Full-stack web developer with a focus on back-end development and an interest in React. This portfolio was built with React, React-DOM, Javascript, and React Social Icons. Navigate to my projects page to learn more about my projects and click on my other links to connect with me!</p>
                </div>
            </section>
        
        </main>
    )
}