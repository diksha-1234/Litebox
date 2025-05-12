import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [typedContent, setTypedContent] = useState('');
  const typingTimeout = useRef(null);
  const containerRef = useRef(null);
  const featuresRef = useRef(null); // For smooth scroll

  const sections = [
    {
      title: "Free Online File Compressor",
      content: "LiteBox offers a user-friendly platform for compressing both text and image files for free, with a focus on performance and ease-of-use."
    },
    {
      title: "Manage Your Files",
      content: "Once compressed or decompressed, files can be saved securely, deleted permanently, or shared directly via link."
    },
    {
      title: "Stunning & Simple UI",
      content: "Built for beginners, LiteBox has a visually attractive and intuitive design — so you don’t need to be tech-savvy to use it!"
    }
  ];

  useEffect(() => {
    if (activeIndex !== null) {
      const fullText = sections[activeIndex].content;
      let charIndex = 0;
      clearTimeout(typingTimeout.current);

      const type = () => {
        if (charIndex === 0) setTypedContent('');
        if (charIndex <= fullText.length) {
          setTypedContent(fullText.substring(0, charIndex));
          charIndex++;
          clearTimeout(typingTimeout.current); // Ensure no overlap
          typingTimeout.current = setTimeout(type, 25);
        }
      };

      type();
    } else {
      setTypedContent('');
    }
    return () => clearTimeout(typingTimeout.current);
  }, [activeIndex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-semibold mb-4">Welcome to LiteBox</h1>
        <p className="text-lg tracking-wide">Compress and decompress your files effortlessly and for free.</p>
        
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/dashboard">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-blue-100 transition">
              Get Started
            </button>
          </Link>
          <button
            onClick={scrollToFeatures}
            className="px-6 py-3 border border-white text-white font-medium rounded-full hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </button>
        </div>
      </section>

      <section ref={featuresRef} className="bg-white py-16 px-4">
        <h2 className="text-4xl text-center mb-12 font-medium text-gray-800 tracking-wide">
          Why Choose <span className="text-purple-600 font-bold">LiteBox</span>?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto" ref={containerRef}>
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(index);
              }}
              className={`cursor-pointer bg-gradient-to-br from-white to-gray-50 p-6 w-full md:w-[30%] rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl ${
                activeIndex === index ? 'ring-4 ring-purple-300' : ''
              }`}
            >
              <h3 className="text-lg font-medium text-purple-700 mb-2 tracking-wide">
                {section.title}
              </h3>
              {activeIndex === index && (
                <p className="text-gray-600 text-sm mt-2 leading-relaxed transition-opacity duration-300 ease-in-out font-light font-serif whitespace-pre-line">
                  {typedContent}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
