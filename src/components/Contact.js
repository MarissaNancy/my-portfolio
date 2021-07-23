import React from "react"

import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return(
        <main className="bg-red-300 justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <div className="text-white text-4xl mb-3 flex justify-center"><h3>Click on the icons to connect with me!</h3></div>
            <div className=" rounded-lg shadow-xl p-16">
                <SocialIcon url="https://github.com/MarissaNancy" className="mr-4" target="_blank" style={{ height: 70, width: 70}} />
                <p className="text-white flex justify-center">This is the link to my github. Here you can checkout more of my projects and my code as well as other things I am currently working on</p>
            </div>
            <div className=" rounded-lg shadow-xl p-16">
            <SocialIcon url="https://www.linkedin.com/in/nancy-m-gonzalez/" className="mr-4" target="_blank" style={{ height: 70, width: 70}} />
            <p className="text-white flex justify-center">This is the link to my linkedin. Here you can checkout more of my work as well as other things I am currently working on</p>
            </div>
        </main>
    )
}