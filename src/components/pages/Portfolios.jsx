/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import portfolio from "../../data/portfolio.json";

function PortfolioSection() {
  return(
    <div className="bg-coklat">
      <Navbar/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
  
    return (
      <div className="portfolio">
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="portfolio Selected"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        )}
  
        <h1 className="text-center text-3xl font-bold mb-2">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {portfolio.map((portfolio, index) => (
            <div key={index} className="border border-gray-400 bg-putih rounded-lg flex justify-center">
              <img
                className="h-72 rounded-lg cursor-pointer"
                src={portfolio.image}
                alt={portfolio.name}
                onClick={() => setSelectedImage(portfolio.image)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition duration-200"
          >
            Back
          </Link>
        </div>
      </div>
    );
  }

export default PortfolioSection