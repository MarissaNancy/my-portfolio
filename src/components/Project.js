import React from "react";
import ProjectData from "../Assets/projects.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
    
    return (
        <main className="bg-purple-300 bg-opacity-900 min-h-screen p-12">
            <section className="container mx-auto text-gray-800">
                <h1 className="text-4xl flex justify-center text-gray-800 font-bold">My Projects </h1>
                <h2 className="text-2xl text-gray-800 flex justify-center mb-12">Here is some of my work</h2>
                <section className="grid grid-cols-2 gap-8 text-gray-800 text-2xl font-bold text-center break-words">
                    {ProjectData.map((project) =>(
                        <ProjectCard  project={project} />
                    ))}
                </section>
            </section>
        </main>
    )

}