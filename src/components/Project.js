import React from "react";

export default function Project( { id, title, github, deploylink, image, summary, technologies }) {

    const cardId = "project" + id
    const target = "#" + cardId;
   
    
    return (
        <main className="bg-purple-300 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center text-white">My Projects </h1>
                <h2 className="text-lg text-white flex justify-center mb-12">Here is some of my work</h2>
                <section className="grid grid-cols-2 gap-8">
                    <article className="relative rounded-lg shadow-xl p-16">
                        <h3 className="text-white text-3xl mb-3">
                            {title}
                        </h3>
                        <div>
                            <img src={image} />
                            <p>{summary}</p>
                            <span>{github}</span>
                            <span>{deploylink}</span>
                            <span>{technologies}</span>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )

}