import React from "react";
import ProjectData from "../Assets/projects.json";
import ProjectCard from "./ProjectCard";

export default function Project() {
    
    return (
        <main className="bg-purple-300 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center text-white">My Projects </h1>
                <h2 className="text-lg text-white flex justify-center mb-12">Here is some of my work</h2>
                <section className="grid grid-cols-2 gap-8">
                    {ProjectData.map((project) =>(
                        <ProjectCard  project={project} />
                    ))}
                    
                </section>
            </section>
        </main>
    )

}