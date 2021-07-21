import React from "react"

import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return(
        <main>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h2 className="text-4xl text-blue leading-none lg:leading-snug ">Where to contact me </h2>
                <div>
                    <SocialIcon url="https://github.com/MarissaNancy" className="mr-4" target="_blank" style={{ height: 30, width: 30}} />
                    <SocialIcon url="https://www.linkedin.com/in/nancy-m-gonzalez/" className="mr-4" target="_blank" style={{ height: 30, width: 30}}/>
                    </div>
            </section>
        </main>
    )
}