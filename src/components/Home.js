import React from "react"
import image from "../Assets/pic.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="beach background" className="absolute object-cover w-full h-full"/>
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-800 leading-none lg:leading-snug flex justify-center ">Welcome to Nancy's portfolio!</h1>
                <div>
                <p className="text-3xl text-gray-800 flex justify-center">Navigate around to learn more about me,my work and where to contact me!</p>
                </div>
            </section>
        
        </main>
    )
}