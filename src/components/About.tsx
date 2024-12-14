// import React from 'react';
import { Code, Globe, Hexagon } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a full-stack developer with a passion for creating elegant solutions to complex problems.
            With expertise in modern web technologies, I build scalable and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
            <Code className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Frontend Development</h3>
            <p className="text-gray-600">
              Expertise in Javascript, TypeScript, and modern CSS frameworks to create responsive and interactive UIs.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
            <Hexagon className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Blockchain Development</h3>
            <p className="text-gray-600">
              Building decentralized applications (dApps) using Ethereum, Solidity, and smart contract development.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
            <Globe className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Web Technologies</h3>
            <p className="text-gray-600">
              Experienced with modern web standards, performance optimization, deployment strategies, and currently learning Web3 technologies.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
