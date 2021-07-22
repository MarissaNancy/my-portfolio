import React from "react"
import image from "../Assets/bg1.png"

export default function Home() {
    return (
        <main>
            <img src={image} alt="textured background with leaves" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-5xl text-blue-600 leading-none lg:leading-snug ">Welcome to Nancy's portfolio!</h1>
                <div classname="justify-center text-blue">
                    <p>ahhhh</p>
                </div>
                </section>
        </main>
    )
}