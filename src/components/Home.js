import React from "react"
import image from "../pic.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Beach" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white leading-none lg:leading-snug ">Welcome to my portfolio!</h1>
            </section>
        </main>
    )
}