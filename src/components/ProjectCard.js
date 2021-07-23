import React from "react";

export default function ProjectCard({ project }) {
  const { id, title, github, deploylink, summary, image } = project;

  return (
    <article className="relative rounded-lg shadow-xl p-16 bg-gray-800">
      <h3 className="text-white text-3xl mb-3">{title}</h3>
      <div>
        <img src={image} />
        <p>{summary}</p>
        <span>{github}</span>
        <span>{deploylink}</span>
      </div>
    </article>
  );
}
