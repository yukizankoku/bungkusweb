 /* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/content/Hero";
import Clients from "./components/content/Clients";
import Products from "./components/content/Products";
import Service from "./components/content/Service";
import Portfolio from "./components/content/Portfolio";
import data from "./data/company-profile.json";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Products />
      <Service />
      <Portfolio />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

function WhatsappButton() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-10 z-50">
        <button
          onClick={handleShow}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-200"
          aria-label="Open WhatsApp Chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-6 h-6"
          >
            <path d="M13.6 2.4A7.928 7.928 0 0 0 8 0a7.944 7.944 0 0 0-8 8c0 1.41.37 2.748 1.03 3.93L0 16l4.18-1.09A7.944 7.944 0 0 0 8 16a7.944 7.944 0 0 0 8-8c0-2.14-.83-4.16-2.4-5.6zM8 14.93c-1.29 0-2.56-.34-3.68-.98l-.26-.15-2.48.64.66-2.42-.17-.26A6.937 6.937 0 0 1 1.07 8c0-3.87 3.14-7 7-7 1.87 0 3.63.73 4.95 2.05a6.943 6.943 0 0 1 2.05 4.95c0 3.87-3.14 7-7 7z" />
            <path d="M11.07 9.93c-.17-.09-1.02-.5-1.18-.55-.16-.06-.28-.09-.39.09-.11.17-.45.55-.55.66-.1.11-.2.12-.37.04-.17-.09-.72-.27-1.37-.85-.51-.45-.85-1-.95-1.18-.1-.17-.01-.27.08-.35.08-.08.17-.2.25-.3.08-.1.1-.17.15-.28.05-.11.02-.21-.01-.3-.03-.08-.39-.94-.53-1.28-.14-.34-.27-.29-.38-.3h-.33c-.11 0-.3.04-.46.21-.16.17-.6.59-.6 1.44s.62 1.67.71 1.79c.09.11 1.22 1.88 2.96 2.63.41.18.73.28.98.36.41.13.79.11 1.09.07.33-.05 1.02-.42 1.17-.82.15-.4.15-.74.1-.82-.04-.08-.15-.13-.31-.21z" />
          </svg>
        </button>
      </div>

      {/* Chat Popup */}
      {show && (
        <div className="fixed bottom-16 right-10 bg-white shadow-lg rounded-lg p-4 w-72 sm:w-80 z-50 transform transition-all duration-300 ease-in-out max-w-full">
          <button
            className="absolute top-2 right-10 text-gray-500 hover:text-gray-700"
            onClick={handleShow}
            aria-label="Close Chat"
          >
            ×
          </button>
          <p className="text-sm text-gray-700 mb-4 text-center">
            Halo! Ada yang bisa kami bantu? 😊
          </p>
          <a
            href={`https://wa.me/${data.phone.replace(/^0/, '62')}?text=Hai%20Bungkus,%20saya%20tertarik%20untuk%20membuat%20custom%20packaging`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full text-center transition duration-200"
          >
            Chat via WhatsApp
          </a>
        </div>
      )}
    </>
  );
}

export default App;
