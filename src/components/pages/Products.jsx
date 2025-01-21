/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import categoriesData from "../../data/categories.json";
import productsData from "../../data/products.json";
import { Link } from "react-router-dom";

function ProductsPage() {
    return(
        <div className="bg-primary">
            <Navbar />
            <Products />
            <Footer />
        </div>
    )
}

const Products = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // Memuat data dari file JSON (bisa menggunakan API jika perlu)
        setCategories(categoriesData);
        setProducts(productsData);
    
        console.log(categoriesData); // Debug: Periksa data kategori
        console.log(productsData);   // Debug: Periksa data produk
    }, []);
    
    // Mengelompokkan produk berdasarkan category_id
    const categorizedProducts = categories.map((category) => {
        const filteredProducts = products.filter(
        (product) => product.categoryId === category.id
        );
        return {
        ...category,
        products: filteredProducts,
        };
    });
    
    return (
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
        {categorizedProducts.map((category) => (
            <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.length > 0 ? (
                category.products.map((product) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.slug}`}
                        className="flex flex-col items-center bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <img
                        className="object-contain bg-zinc-300 w-full h-48 rounded-t-lg md:h-56"
                        src={product.image}
                        alt={product.name}
                        />
                        <div className="p-4">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {product.name}
                        </h5>
                        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                            Deskripsi Produk
                        </p>
                        </div>
                    </Link>
                ))
                ) : (
                <p className="text-gray-600">No products available.</p>
                )}
            </div>
            </div>
        ))}
            <div className="flex justify-center items-center mt-5">
                <Link
                to="/"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition duration-200"
                >
                Back
                </Link>
            </div>
        </div>
    );
    };
  
  export default ProductsPage;