import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanevzbo';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-black text-white py-20 sm:py-28 flex flex-col items-center justify-center min-h-screen"
      id="contact"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:space-x-12 px-4 sm:px-8 md:px-16 lg:px-24 w-full max-w-5xl">
        
        {/* Left Section */}
        <div className="flex-1 mb-10 md:mb-0 w-full md:w-1/2">
          <h3 className="text-xl sm:text-2xl mb-4">Let's Talk</h3>
          <p className="mb-6 text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
            I’m open to any project and always excited to bring your ideas to life.
            With my skills, I aim to create exactly what you envision and I’m always
            happy to collaborate. Let’s connect!
          </p>

          <div className="space-y-4 max-w-md mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-green-400 mr-3 flex-shrink-0" />
              <a href="mailto:minoo.yaghoubi@gmail.com" className="hover:underline break-all">
                minoo.yaghoubi@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <FaPhone className="text-green-400 mr-3 flex-shrink-0" />
              <span>+358 465461799</span>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-green-400 mr-3 flex-shrink-0" />
              <span>Finland</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full md:w-1/2 max-w-md">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 text-sm sm:text-base"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 text-sm sm:text-base"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 text-sm sm:text-base"
              rows="5"
              placeholder="Message"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-full text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-sm sm:text-base text-center md:text-left ${
                status.includes('successfully') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;


