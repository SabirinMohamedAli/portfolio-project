import React from 'react';

function About() {
  return (
    <div className="bg-purple-900 text-white py-20 px-4">
      <section className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="text-xl mb-12">I'm a hard worker and passionate about UI/UX design. I can help everyone build their business.</p>
      </section>


      <section className="max-w-7xl mx-auto mt-1">
        <h2 className="text-4xl font-bold mb-8 text-center">My Services</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="App Design"
            description="Designing beautiful and functional mobile apps."
          />
          <ServiceCard
            title="Web Development"
            description="Building responsive and interactive websites."
          />
          <ServiceCard
            title="UI/UX Design"
            description="Creating user-friendly and attractive interfaces."
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto mt-16">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Donuts House"
            description="Social media poster for Donuts house store."
          />
          <ProjectCard
            title="Business Dashboard"
            description="A dashboard for workers to measure productivity."
          />
          <ProjectCard
            title="Helper Website"
            description="Landing page web design for an e-commerce app."
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-purple-700 p-6 rounded-lg text-center shadow-lg hover:bg-purple-600 transition duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-purple-700 p-6 rounded-lg text-center shadow-lg hover:bg-purple-600 transition duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg mb-4">{description}</p>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
        View Project
      </button>
    </div>
  );
}

export default About;
