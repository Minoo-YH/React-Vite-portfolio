import React, { useState } from "react";

const services = [
  { id: 1, title: "Web Design", description: "Creating visually appealing and user-friendly web designs.", fullDescription: "This includes layout, color schemes, typography, and overall aesthetics for websites." },
  { id: 2, title: "Frontend Development", description: "Building responsive and interactive user interfaces.", fullDescription: "Using React.js with the flexibility to switch to any language based on customer needs. I’m a quick learner and excited to be part of challenging and innovative ideas." },
  { id: 3, title: "Backend Development", description: "Developing robust server-side logic and databases.", fullDescription: "Using Node.js or Python with databases like MySQL, SQL, or MongoDB." },
  { id: 4, title: "Full-Stack Development", description: "Combining both frontend and backend development skills.", fullDescription: "As a Full-Stack Developer, I take pride in building complete applications that just work—smoothly and beautifully..." },
  { id: 5, title: "Cybersecurity Junior", description: "Integrating security best practices to prevent vulnerabilities.", fullDescription: "Protect against SQLi, XSS, CSRF. SSL/TLS, auth hardening, input validation, etc." },
  { id: 6, title: "Cloud Computing", description: "Deploying scalable apps on Azure and AWS.", fullDescription: "Azure App Services/Functions/SQL, AWS EC2/S3/Lambda, security and cost-optimisation." },
];

const Services = () => {
  const [expandedServiceId, setExpandedServiceId] = useState(null);
  const toggleReadMore = (id) => setExpandedServiceId(expandedServiceId === id ? null : id);

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col">
              <div className="text-right text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">{service.id}</div>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{service.title}</h3>
              <p className="mt-2 text-gray-300 flex-grow">{service.description}</p>
              {expandedServiceId === service.id && (<p className="mt-2 text-gray-400">{service.fullDescription}</p>)}
              <button onClick={() => toggleReadMore(service.id)} className="mt-4 inline-block text-green-400 hover:text-blue-500 self-start">
                {expandedServiceId === service.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

