import { Link } from "react-router-dom"
import data from "../data/company-profile.json"

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
                                <a href="#" className="hover:underline" dangerouslySetInnerHTML={{ __html: data.address }}></a>
                            </li>
                            <li>
                                <a href={`https://wa.me/${data.phone.replace(/^0/, '62')}?text=Hai%20Bungkus,%20saya%20tertarik%20untuk%20membuat%20custom%20packaging`} target="_blank" className="hover:underline">{data.phone}</a>
                            </li>
                            <li>
                                <a href={`mailto:${data.email}`} target='blank' className="hover:underline">{data.email}</a>
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

export default Footer