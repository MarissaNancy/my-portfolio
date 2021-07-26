import React from "react";

export default function ProjectCard({ project }) {
  const { id, title, github, deploylink, summary, image } = project;

  return (
    <article className="relative rounded-lg shadow-xl p-16 bg-gray-800">
      <h3 className=" text-3xl mb-3">{title}</h3>
      <div>
        <img src={image} />
        <p>{summary}</p>
        <a href={github}><span className= "text-blue-400">Github</span></a>
        <br/>
        <a href={deploylink}><span className="text-blue-400">Deployed</span></a>
        
      </div>
    </article>
  );
}
