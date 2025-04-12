"use client"

// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [expandedSubsidiary, setExpandedSubsidiary] = useState(null);
  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  const toggleSubsidiary = (index) => {
    if (expandedSubsidiary === index) {
      setExpandedSubsidiary(null);
    } else {
      setExpandedSubsidiary(index);
    }
  };

  const subsidiaries = [
    {
      name: "SG-CON",
      shortDesc: "24/7 Call Center",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12c0 2.8-2.2 5-5 5s-5-2.2-5-5m10-3c0-2.8-2.2-5-5-5s-5 2.2-5 5" />
        </svg>
      ),
      description: "SG-CON provides round-the-clock customer service solutions that cater to your business's needs. From call handling to comprehensive support, we ensure your customers are always attended to, regardless of time zones."
    },
    {
      name: "SG-BPO",
      shortDesc: "Process Outsourcing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      description: "SG-BPO offers efficient, cost-effective outsourcing of non-core business processes. From HR services to data management, our BPO solutions streamline operations, reduce costs, and increase productivity."
    },
    {
      name: "SG-TECH",
      shortDesc: "Software & IT",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: "SG-TECH specializes in innovative software development and IT solutions tailored to your business's needs. We provide custom software, system integrations, and cutting-edge technologies to keep you ahead of the curve."
    },
    {
      name: "SG-TALENT",
      shortDesc: "Skilled Worker Consultancy",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      description: "SG-TALENT is your partner in sourcing highly skilled professionals across various industries. Whether it's temporary staffing or permanent recruitment, we provide top-tier talent to match your business requirements."
    }
  ];

  const testimonials = [
    {
      quote: "STEAMGOAT transformed our customer service capabilities with their 24/7 support solutions. Our customer satisfaction rates have increased by 35% since implementation.",
      author: "Sarah Johnson",
      position: "COO, TechSolutions Inc."
    },
    {
      quote: "The SG-TECH team delivered a custom software solution that exceeded our expectations. Their innovative approach and technical expertise have given us a competitive edge.",
      author: "Michael Chen",
      position: "CTO, Global Innovations"
    },
    {
      quote: "Working with SG-TALENT has revolutionized our hiring process. They consistently provide high-quality candidates who align perfectly with our company culture and requirements.",
      author: "Emma Rodriguez",
      position: "HR Director, NextGen Enterprises"
    }
  ];

  return (
    <div className="font-serif">
      <Head>
        <title>STEAMGOAT - We Devour Your Tech & Outsourcing Problems</title>
        <meta name="description" content="STEAMGOAT specializes in innovative solutions to resolve your technology, outsourcing, and talent needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-100">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          <span className="ml-2 text-2xl font-bold text-blue-900">STEAMGOAT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="px-4 py-2 text-blue-900 hover:text-blue-700">About</a>
          <a href="#subsidiaries" className="px-4 py-2 text-blue-900 hover:text-blue-700">Subsidiaries</a>
          <a href="#testimonials" className="px-4 py-2 text-blue-900 hover:text-blue-700">Testimonials</a>
          <a href="#contact" className="px-4 py-2 text-blue-900 hover:text-blue-700">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-blue-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#about" className="block text-blue-900 hover:text-blue-700">About</a>
          <a href="#subsidiaries" className="block text-blue-900 hover:text-blue-700">Subsidiaries</a>
          <a href="#testimonials" className="block text-blue-900 hover:text-blue-700">Testimonials</a>
          <a href="#contact" className="block text-blue-900 hover:text-blue-700">Contact</a>
        </div>
      )}
    </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">WE DEVOUR YOUR TECH & OUTSOURCING PROBLEMS</h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              At STEAMGOAT, we specialize in innovative solutions to resolve your technology, outsourcing, and talent needs. Let us tackle your business challenges, so you can focus on growth.
            </p>
            <a href="#subsidiaries" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Explore Our Subsidiaries
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">About STEAMGOAT</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                STEAMGOAT is a global leader in tech-driven outsourcing solutions, delivering expertise in process outsourcing, software development, talent acquisition, and 24/7 support. Our vision is to provide businesses with unparalleled efficiency and scalability, allowing them to thrive in a fast-evolving world.
              </p>
              <p className="text-lg mb-6">
                With our commitment to innovation, we empower clients across various industries to overcome technological barriers and optimize their operations with the help of our expert subsidiaries.
              </p>
              <p className="text-lg">
                Explore how our subsidiaries redefine outsourcing in each sector and discover the bespoke solutions we offer.
              </p>
            </div>
          </div>
        </section>

        {/* Subsidiaries Section */}
        <section id="subsidiaries" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Subsidiaries</h2>
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {subsidiaries.map((subsidiary, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full p-6 flex items-center justify-between focus:outline-none"
                    onClick={() => toggleSubsidiary(index)}
                  >
                    <div className="flex items-center">
                      <div className="mr-4">{subsidiary.icon}</div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-blue-900">{subsidiary.name}</h3>
                        <p className="text-gray-600">{subsidiary.shortDesc}</p>
                      </div>
                    </div>
                    {expandedSubsidiary === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-900" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-blue-900" />
                    )}
                  </button>
                  {expandedSubsidiary === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 mb-4">{subsidiary.description}</p>
                      <button className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded transition duration-300">
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">What Our Clients Say</h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients who have experienced transformative results with STEAMGOAT.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-blue-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

    {/* Global Coverage Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Global Coverage</h2>
    <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
      STEAMGOAT operates across the globe, offering comprehensive solutions to clients in various regions. Our presence in key markets ensures that we are always ready to provide high-quality, scalable services wherever you are.
    </p>
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="w-full h-[500px]">
        <ComposableMap projectionConfig={{ scale: 160 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#E0E7FF",
                      stroke: "#fff",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#93C5FD",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#3B82F6",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  </div>
</section>

<section
  id="contact"
  className="py-16 text-white bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"
>

  <div className=" bg-opacity-80 py-12 px-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-between max-w-6xl ">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            Stay connected with us for latest news and updates
          </h2>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4">
            <p className="mb-4">All the fields marked with * are required</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">
                  FIRST NAME*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border-b-2 border-orange-500 rounded text-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">
                  LAST NAME*
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 rounded border-b-2 border-orange-500 text-gray-800"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block mb-1">
                  EMAIL*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded border-b-2 border-orange-500 text-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-1">
                  COMPANY*
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full p-2 rounded border-b-2 border-orange-500 text-gray-800"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="jobTitle" className="block mb-1">
                  JOB TITLE*
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="w-full p-2 rounded border-b-2 border-orange-500 text-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-2  rounded border-b-2 border-orange-500 text-gray-800"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="marketing" className="mr-2" />
              <label htmlFor="marketing">
                Opt in for marketing communication
              </label>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold">STEAMGOAT</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition duration-300">Contact Us</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} STEAMGOAT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}