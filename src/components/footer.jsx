/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom"
import company from "../data/company-profile.json"

function Footer() {
    return(
        <footer className="bg-gray-200 rounded-t-3xl">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                    <iframe
                        className="border mt-5 w-full h-64 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1022461798384!2d106.7071420741316!3d-6.250256361196221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbcb04638ea5%3A0xffeb08215ea3061b!2sJl.%20Utama%20Puri%20Bintaro%20Hijau%20Blok%20F9%20No.11%2C%20RT.001%2FRW.007%2C%20Parung%20Serab%2C%20Kec.%20Ciledug%2C%20Kota%20Tangerang%2C%20Banten%2015153!5e0!3m2!1sid!2sid!4v1735632435229!5m2!1sid!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                    <div>
                    <div className="mb-6 md:mb-0 mr-4">
                        <Link to="/" className="flex items-center">
                            <img src="/logo.png" className="h-32 me-3" alt="Bungkus Logo" />
                            <span className="hidden">Bungkus</span>
                        </Link>
                    </div>
                        <ul className="text-gray-500 font-medium">
                            <li>
                                <a href="#" className="hover:underline" dangerouslySetInnerHTML={{ __html: company.address }}></a>
                            </li>
                            <li>
                                <WhatsappLink/>
                            </li>
                            <li>
                                <a href={`mailto:${company.email}`} target='blank' className="hover:underline">{company.email}</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div> */}
                    <div className="mt-10">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to="/about" className="hover:underline">About Us</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/contact" className="hover:underline">Contact</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="hover:underline">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2025 <Link to="/" className="hover:underline">Bungkus™ | CV. Asia Kreasi Solusi</Link>. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>
    )
}

function WhatsappLink({ data }) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
      nama: "",
      perusahaan: "",
      usaha: "",
      provinsi: "",
    });
  
    const handleShow = () => setShow(!show);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      const { nama, perusahaan, usaha, provinsi } = formData;
  
      // Validasi jika ada input yang kosong
      if (!nama || !perusahaan || !usaha || !provinsi) {
        alert("Harap lengkapi semua data!");
        return;
      }
  
      // Buat pesan WhatsApp
      const message = `Hallo, saya ingin BUNGKUS produk saya:
  - Nama: ${nama}
  - Nama Perusahaan: ${perusahaan}
  - Jenis Usaha: ${usaha}
  - Provinsi: ${provinsi}`;
      const whatsappUrl = `https://wa.me/${company.phone.replace(/^0/,"62")}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    };
  
    return (
      <>
        {/* Link yang memunculkan popup */}
        <button onClick={handleShow}
          className="hover:underline">
          {company.phone}
        </button>
  
        {/* Popup Form */}
        {show && (
          <div className="fixed bottom-16 right-10 bg-white shadow-lg rounded-lg p-4 w-72 sm:w-80 z-50 transform transition-all duration-300 ease-in-out max-w-full">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
              onClick={handleShow}
              aria-label="Close Form"
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
                onChange={handleChange}
                placeholder="Nama"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="text"
                name="perusahaan"
                value={formData.perusahaan}
                onChange={handleChange}
                placeholder="Nama Perusahaan"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="text"
                name="usaha"
                value={formData.usaha}
                onChange={handleChange}
                placeholder="Jenis Usaha"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="text"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleChange}
                placeholder="Provinsi"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
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

export default Footer