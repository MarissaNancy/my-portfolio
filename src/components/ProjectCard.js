import React from "react";

export default function ProjectCard({ project }) {
  const { title, github, deploylink, summary, image, technologies } = project;

  return (
    <article className="relative rounded-lg shadow-xl p-16 bg-gray-800">
      <h3 className=" text-3xl m-4">{title}</h3>
      <div className="text-center">
        <img src={image} className="rounded-lg"/>
        <p className="m-5">About: {summary}</p>
        <a href={github} target="_blank"><span className= "text-blue-400 m-5">Github Link</span></a>
        <a href={deploylink} target="_blank"><span className="text-blue-400 m-5">Deployed Link</span></a>
        <p className="m-8">Built with: {technologies}</p>
      </div>
    </article>
  );
}
