/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "flowbite-react";
import products from "../../data/products.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import company from "../../data/company-profile.json";

function ProductSection() {
  return(
    <div className="bg-primary">
      <Navbar/>
      <Product/>
      <Footer/>
    </div>
  )
}

function Product() {
    const { slug } = useParams();
    const product = products.find((prod) => prod.slug === slug);
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1); // Mundur satu langkah ke halaman sebelumnya
    };
  
    if (!product) {
      return <h1>Product not found</h1>;
    }
  
    return (
      <div>
        <section className="py-8 bg-gray-200 md:py-16 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-full" src={product.image} loading="lazy" alt={product.name} />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {product.name}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <WhatsappPopup/>
              </div>

              <hr className="my-6 md:my-8 border-gray-200" />

              <p className="mb-6 text-gray-500">
                Deskripsi <br />
                Rekomendasi Bahan <br />
                Rekomendasi Ukuran <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mt-5">
        <Button
          onClick={goBack}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition duration-200"
        >
          Back
        </Button>
      </div>
      </div>
    );
  }

  function WhatsappPopup({ data }) {
    const { slug } = useParams();
    const product = products.find((prod) => prod.slug === slug);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
      nama: "",
      perusahaan: "",
      usaha: "",
      provinsi: "",
    });
  
    const togglePopup = () => setShowPopup(!showPopup);
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      const { nama, perusahaan, usaha, provinsi } = formData;
  
      // Validasi jika input belum lengkap
      if (!nama || !perusahaan || !usaha || !provinsi) {
        alert("Harap lengkapi semua data!");
        return;
      }
  
      const message = `Hallo, saya ingin BUNGKUS produk saya:
  - Nama: ${nama}
  - Nama Perusahaan: ${perusahaan}
  - Jenis Usaha: ${usaha}
  - Provinsi: ${provinsi}
  - Produk Pilihan: ${product.name}`;
  
      const whatsappUrl = `https://wa.me/${company.phone.replace(
        /^0/,
        "62"                                                        
      )}?text=${encodeURIComponent(message)}`;
  
      window.open(whatsappUrl, "_blank");
    };
  
    return (
      <>
        {/* Tombol WhatsApp */}
        <a
          onClick={togglePopup}
          title="Hubungi Kami"
          className="text-black mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center cursor-pointer"
          role="button"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
              clipRule="evenodd"
            />
            <path
              fill="currentColor"
              d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
            />
          </svg>
          Hubungi Kami
        </a>
  
        {/* Pop-up Form */}
        {showPopup && (
          <div className="fixed bottom-16 right-10 bg-white shadow-lg rounded-lg p-4 w-72 sm:w-80 z-50 transform transition-all duration-300 ease-in-out max-w-full">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Isi Detail Anda
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                placeholder="Nama"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary-500"
              />
              <input
                type="text"
                name="perusahaan"
                value={formData.perusahaan}
                onChange={handleInputChange}
                placeholder="Nama Perusahaan"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary-500"
              />
              <input
                type="text"
                name="usaha"
                value={formData.usaha}
                onChange={handleInputChange}
                placeholder="Jenis Usaha"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary-500"
              />
              <input
                type="text"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleInputChange}
                placeholder="Provinsi"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary-500"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-200"
            >
              Kirim via WhatsApp
            </button>
          </div>
        )}
      </>
    );
  }
  
  export default ProductSection;