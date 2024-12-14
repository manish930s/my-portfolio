import { Github, Linkedin, Mail, X } from 'lucide-react';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    // Disable body scroll when the menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Full Screen Blocking Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose} // Close menu when overlay is clicked
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-8 mt-8">
          <a
            href="#home"
            onClick={onClose}
            className="text-xl hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={onClose}
            className="text-xl hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={onClose}
            className="text-xl hover:text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="text-xl hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://github.com/manish930s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://shorturl.at/bFkQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:manishhexa21@gmail.com"
            className="hover:text-blue-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
}
