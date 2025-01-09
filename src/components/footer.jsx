import { Link } from "react-router-dom"

function Footer() {
    return(
        <footer className="bg-cyan-200 mt-10 rounded-md">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <img src="/logo.png" className="h-14 me-3" alt="Bungkus Logo" />
                        <span className="hidden">Bungkus</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Kontak</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Alamat</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Telepon/Customer Service</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Email/Support</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to="/about" className="hover:underline">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2025 <Link to="/" className="hover:underline">Bungkus™ | PT. Asia Kreasi Solusi</Link>. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>
    )
}

export default Footer