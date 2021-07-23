import React from "react"
import bg1 from "../Assets/bg1.png"
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return(
        <main>
            <img src={bg1} alt="purple background" className="absolute object-cover w-full h-full"/>
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