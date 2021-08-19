import React from "react"
import Resume from "../Assets/Resume.pdf"

export default function ResumeBtn() {
    return(
        <p className="text-white font-bold text-center text-3xl">Click <span className= "text-red-900 font-bold "><a href={Resume} target="_blank" rel="noopener noreferrer"> here</a></span> to view my resume</p>
    )
}