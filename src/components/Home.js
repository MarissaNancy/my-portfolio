import React from "react"
import image from "../Assets/pic.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="beach background" className="absolute object-cover w-full h-full"/>
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white leading-none lg:leading-snug ">Welcome to Nancy's portfolio!</h1>
                <div className=" text-white">
                <p className="text-3xl">Navigate around to learn more about me, my work and where to contact me!</p>
                <p className="align-center"> </p>
                </div>
            </section>
        
        </main>
    )
}