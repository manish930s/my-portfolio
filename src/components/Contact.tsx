import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm('service_dgv1lys', 'template_ymr04lj', form, 'zD0q8Hne_fgJ4QIJJ')
      .then(() => {
        setStatus('Message sent successfully!');
        form.reset(); // Clear the form fields
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-4" />
                <span>manishhexa21@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-4" />
                <span>+91 9309915848</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-4" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        {status && <p className="text-center mt-6 text-lg">{status}</p>}
      </div>
    </section>
  );
}