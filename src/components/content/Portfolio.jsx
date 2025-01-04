/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const images = [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    ];
  
    return (
      <div className="portfolio">
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        )}
  
        <h1 className="text-center text-3xl font-bold mb-2">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-6">
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="h-72 rounded-lg cursor-pointer"
                src={image}
                alt={`Gallery ${index + 1}`}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Portfolio