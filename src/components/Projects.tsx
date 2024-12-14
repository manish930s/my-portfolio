// import React from 'react';
import { Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'library management system',
      description: 'A software application built with Java and MySql',
      image: 'https://img.freepik.com/premium-photo/old-open-textbook-reading-desk-library-with-bookshelves-background-concept-library-books-reading-education-vintage_864588-60393.jpg?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/manish930s/library-management-system',
      // demo: 'https://example.com'
    },
    {
      title: 'Currency converter',
      description: 'A software application with real-time currency convert',
      image: 'https://t4.ftcdn.net/jpg/09/97/10/65/360_F_997106527_zMlQNOWy7goNnPFQ6nrdNuDg0WzDJJC7.jpg?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/manish930s/Currency-converter',
      // demo: 'https://example.com'
    },
    {
      title: 'number guessing game',
      description: 'This is a fun game with python and MySql',
      image: 'https://i.pinimg.com/474x/99/d9/23/99d9239aafdc5dd180eeae9bc30dcc6a.jpg?auto=format&fit=crop&w=1000&q=40',
      github: 'https://github.com/manish930s/number-guessing-game',
      // demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    // href={project.demo}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    {/* <ExternalLink className="w-5 h-5 mr-2" />
                    Demo */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}