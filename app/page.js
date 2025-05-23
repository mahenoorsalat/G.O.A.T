"use client"

// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      setSubmitted(true);
      setMessage("Your form has been submitted successfully!");
    }
  }
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
      name: "STEAMGOAT CONNECT",
      shortDesc: "24/7 Call Center",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7adfcf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12c0 2.8-2.2 5-5 5s-5-2.2-5-5m10-3c0-2.8-2.2-5-5-5s-5 2.2-5 5" />
        </svg>
      ),
      description: "SG-CON provides round-the-clock customer service solutions that cater to your business's needs. From call handling to comprehensive support, we ensure your customers are always attended to, regardless of time zones."
    },
    {
      name: "SG-BPO",
      shortDesc: "Business Process Outsourcing (BPO)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7adfcf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      description: "SG-BPO offers efficient, cost-effective outsourcing of non-core business processes. From HR services to data management, our BPO solutions streamline operations, reduce costs, and increase productivity."
    },
    {
      name: "SG-TECH",
      shortDesc: "IT / Software / Tech",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7adfcf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description: "SG-TECH specializes in innovative software development and IT solutions tailored to your business's needs. We provide custom software, system integrations, and cutting-edge technologies to keep you ahead of the curve."
    },
    {
      name: "SG-TALENT",
      shortDesc: "Skilled Worker Outsourcing Consultancy",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7adfcf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      description: "SG-TALENT is your partner in sourcing highly skilled professionals across various industries. Whether it's temporary staffing or permanent recruitment, we provide top-tier talent to match your business requirements."
    },
    {
      name: "AURUM HUMANA",
      shortDesc: "Recruitment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#7adfcf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3h1c1.657 0 3 1.343 3 3v1c0 1.657-1.343 3-3 3h-1c-1.657 0-3-1.343-3-3zM7 11c0-1.657 1.343-3 3-3h1c1.657 0 3 1.343 3 3v1c0 1.657-1.343 3-3 3h-1c-1.657 0-3-1.343-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20h14M5 4h14" />
        </svg>
      ),
      description: "AURUM HUMANA redefines consultancy with a human-first approach. We focus on leadership development, organizational culture, and tailored strategies that align people and purpose—empowering teams to thrive in the evolving future of work."
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

      <header >
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
         
          <span className="ml-2 text-2xl font-bold text-[#0ebcb5]">STEAMGOAT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="px-4 py-2 text-[#0ebcb5] hover:text-[#7adfcf]">About</a>
          <a href="#subsidiaries" className="px-4 py-2 text-[#0ebcb5] hover:text-[#7adfcf]">Subsidiaries</a>
          <a href="#testimonials" className="px-4 py-2 text-[#0ebcb5] hover:text-[#7adfcf]">Testimonials</a>
          <a href="#contact" className="px-4 py-2 text-[#0ebcb5] hover:text-[#7adfcf]">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-[#0ebcb5] focus:outline-none"
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
          <a href="#about" className="block text-[#0ebcb5] hover:text-[#7adfcf]">About</a>
          <a href="#subsidiaries" className="block text-[#0ebcb5] hover:text-[#7adfcf]">Subsidiaries</a>
          <a href="#testimonials" className="block text-[#0ebcb5] hover:text-[#7adfcf]">Testimonials</a>
          <a href="#contact" className="block text-[#0ebcb5] hover:text-[#7adfcf]">Contact</a>
        </div>
      )}
    </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#0ebcb5] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              At STEAMGOAT, we specialize in innovative solutions to resolve your technology, outsourcing, and talent needs. Let us tackle your business challenges, so you can focus on growth.
            </p>
            <a href="#subsidiaries" className="bg-[#7adfcf] hover:bg-[#7adfcf] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Explore Our Subsidiaries
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#0ebcb5]">About STEAMGOAT</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-black mb-6">
                STEAMGOAT is a global leader in tech-driven outsourcing solutions, delivering expertise in process outsourcing, software development, talent acquisition, and 24/7 support. Our vision is to provide businesses with unparalleled efficiency and scalability, allowing them to thrive in a fast-evolving world.
              </p>
              <p className="text-lg text-black mb-6">
                With our commitment to innovation, we empower clients across various industries to overcome technological barriers and optimize their operations with the help of our expert subsidiaries.
              </p>
              <p className="text-lg text-black">
                Explore how our subsidiaries redefine outsourcing in each sector and discover the bespoke solutions we offer.
              </p>
            </div>
          </div>
        </section>

        {/* Subsidiaries Section */}
        <section id="subsidiaries" className="py-16 bg-[#edfffe]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#0ebcb5]">Our Subsidiaries</h2>
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
                        <h3 className="text-xl font-bold text-[#0ebcb5]">{subsidiary.name}</h3>
                        <p className="text-gray-600">{subsidiary.shortDesc}</p>
                      </div>
                    </div>
                    {expandedSubsidiary === index ? (
                      <ChevronUp className="h-6 w-6 text-[#0ebcb5]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[#0ebcb5]" />
                    )}
                  </button>
                  {expandedSubsidiary === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 mb-4">{subsidiary.description}</p>
                      <button className="bg-[#0ebcb5] hover:bg-blue-800 text-white py-2 px-4 rounded transition duration-300">
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
            <h2 className="text-3xl font-bold text-center mb-10 text-[#0ebcb5]">What Our Clients Say</h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients who have experienced transformative results with STEAMGOAT.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#edfffe] p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-[#0ebcb5]">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

    {/* Global Coverage Section */}
<section className="py-16 bg-[#edfffe]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10 text-[#0ebcb5]">Global Coverage</h2>
    <p className="text-black text-lg text-center mb-12 max-w-3xl mx-auto">
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
  <div className="bg-opacity-80 py-12 px-4">
    <div className="container mx-auto px-4 max-w-6xl bg-white bg-opacity-10 rounded-md p-6">
      <h2 className="text-3xl text-[#08918c] font-bold text-center mb-6">
        Get In Touch
      </h2>
      <p className="text-center text-black text-sm mb-8">
        To find out how our intelligent, efficient and economical services can help you gain, retain and grow your customers’ business, please get in touch below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7adfcf]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7adfcf]"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          className="w-full p-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7adfcf]"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full p-3 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7adfcf]"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 rounded border border-gray-300 text-gray-900 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#7adfcf]"
        />
        
        {submitted && (
          <p className="text-green-200 font-semibold pt-2">{message}</p>
        )}

        <div className="text-center">
          <button
            type="submit"
            className={`font-bold py-3 px-10 rounded transition duration-300 ${
              submitted
                ? "bg-green-500 pointer-events-none"
                : "bg-[#08918c] hover:bg-[#7adfcf] text-white"
            }`}
            disabled={submitted}
          >
            {submitted ? "SUBMITTED" : "SEND MESSAGE"}
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


      </main>

      <footer className="bg-white text-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">

  <span className="ml-2 text-xl font-bold">STEAMGOAT</span>
</div>

            <div className="flex space-x-4">
            <a target='_blank' href="https://www.linkedin.com/company/steamgoat/" className="hover:text-[#7adfcf] transition duration-300">Linkedin</a>
              <a href="#" className="hover:text-[#7adfcf] transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#7adfcf] transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#7adfcf] transition duration-300">Contact Us</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} STEAMGOAT | Developed By <a target='_blank' className='text-[#7adfcf] underline' href='https://www.linkedin.com/in/mahenoor-salat/'>Mahenoor</a> | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}