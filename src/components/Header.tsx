import { useState } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Manish</div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/manish930s" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://shorturl.at/bFkQ9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:manishhexa21@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}