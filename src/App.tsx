// import React from 'react';
import { Scene } from './components/3d/Scene';
import { Header } from './components/Header';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="h-screen sticky top-0 -z-10">
        <Scene />
      </div>
      <main className="relative bg-white z-10">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;