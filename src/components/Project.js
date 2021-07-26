import React from "react";
import ProjectData from "../Assets/projects.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
    
    return (
        <main className="bg-gray-500 bg-opacity-900 min-h-screen p-12">
            <section className="container mx-auto text-gray-800">
                <h1 className="text-4xl flex justify-center text-white font-bold">My Projects </h1>
                <h2 className="text-2xl text-white flex justify-center mb-12">Here are some of my projects</h2>
                <section className="text-white grid grid-cols-2 gap-8 text-2xl font-bold text-center break-words">
                    {ProjectData.map((project) =>(
                        <ProjectCard  project={project} />
                    ))}
                </section>
            </section>
        </main>
    )

}