/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import factory from '../../data/factories.json';
import { Link } from "react-router-dom";

function Factory() {
  const [selectedImage, setSelectedImage] = useState(null);
  const limitedFactory = factory.slice(0, 6);

  return (
    <div className="factory px-4 py-4 sm:px-6 lg:px-8 bg-krem bg-cover bg-center rounded-3xl" data-aos="fade-up"
    data-aos-duration="3000">
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="factory selected"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

      <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
        Factory and Machine
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {limitedFactory.map((item, index) => (
          <div key={index} className="flex justify-center bg-white border border-gray-400 rounded-lg">
            <img
              className="h-48 sm:h-60 md:h-72 bg-putih w-full object-contain rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              src={item.image}
              alt={item.name}
              onClick={() => setSelectedImage(item.image)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          to="/factory"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition duration-200"
        >
          Lihat Lebih Banyak
        </Link>
      </div>
    </div>
  );
}

export default Factory;