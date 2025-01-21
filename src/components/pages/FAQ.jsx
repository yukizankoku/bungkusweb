/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

function FAQSection(){
    return(
        <div className="bg-primary">
            <Navbar/>
            <main className="flex-grow container mx-auto px-4 py-8 ">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Frequently Asked Questions
                </h1>
                <Faq />
            </main>
            <div className="flex justify-center items-center">
                <Link
                to="/"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition duration-200"
                >
                Back
                </Link>
            </div>
            <Footer/>
        </div>
    )    
}

function Faq() {
    const faqs = [
        {
            question: "Apa layanan utama perusahaan packaging ini?",
            answer:
                "Kami menyediakan berbagai solusi pengemasan, termasuk desain kemasan, produksi, dan layanan konsultasi untuk kebutuhan pengemasan Anda."
        },
        {
            question: "Apakah perusahaan menerima pesanan kustom?",
            answer:
                "Ya, kami mendukung pesanan kustom untuk memastikan kemasan sesuai dengan kebutuhan dan merek Anda."
        },
        {
            question: "Berapa lama waktu produksi untuk pesanan?",
            answer:
                "Waktu produksi tergantung pada kompleksitas dan jumlah pesanan, biasanya membutuhkan 7-14 hari kerja."
        },
        {
            question: "Apakah bahan yang digunakan ramah lingkungan?",
            answer:
                "Ya, kami menawarkan bahan ramah lingkungan dan dapat didaur ulang untuk semua jenis kemasan."
        },
        {
            question: "Bagaimana cara melakukan pemesanan?",
            answer:
                "Anda dapat melakukan pemesanan dengan menghubungi kami melalui email, telepon, atau langsung melalui website."
        }
    ];

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full px-4 py-2 text-left font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <span>{question}</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="px-4 py-2 text-gray-600">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default FAQSection;