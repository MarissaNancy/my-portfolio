import React from "react"
import hiking1 from "../Assets/hiking1.jpg"

export default function About() {
    return(
        <main className="bg-gray-800 min-h-screen p-12">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="rounded-lg shadow-2xl lg:flex p-20 ">
                    <img src={hiking1} className="rounded w-50 h-50 lg:w-64 lg:h-64 mr-8" alt="mountains in nature"/>
                    <div>
                        <h1 className="text-4xl justify-center mb-4 text-white">
                        A little bit about me:
                        </h1>
                        <div className="text-2xl  justify-center text-white">
                        My name is Nancy and I was born and raised in Los Angeles. I was first introduced to coding back when MySpace was popular and everyone wanted to have the best layout. After doing some research I realized I could personalize my profile by altering the code and I was drawn into learning more. I liked that I could create something creating something based off what I had pictured in my head. That's why I like coding because if you can imagine it you can probably code it!
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}