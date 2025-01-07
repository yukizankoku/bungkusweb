/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Navbar from '../navbar.jsx';
import Footer from '../footer.jsx';

function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <div className="mt-6">
          <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
            <div>
              <h1 className="text-gray-800 text-3xl font-bold">Let&apos;s Talk</h1>
              <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we&apos;d love to hear about your project  and provide help.</p>
              <iframe className="border mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1022461798384!2d106.7071420741316!3d-6.250256361196221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbcb04638ea5%3A0xffeb08215ea3061b!2sJl.%20Utama%20Puri%20Bintaro%20Hijau%20Blok%20F9%20No.11%2C%20RT.001%2FRW.007%2C%20Parung%20Serab%2C%20Kec.%20Ciledug%2C%20Kota%20Tangerang%2C%20Banten%2015153!5e0!3m2!1sid!2sid!4v1735632435229!5m2!1sid!2sid" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              <div className="mt-12">
                <h2 className="text-gray-800 text-base font-bold">Email</h2>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <img className='' src="/icons/social/address.svg" alt="" />
                    </div>
                    <a href="#" className="text-black text-sm ml-4">
                      <small className="block">Address</small>
                      <strong>JL Raya Pondok Aren Komplek Puri Bintaro Hijau Blok F9 no. 3</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <img className='' src="/icons/social/email.svg" alt="" />
                    </div>
                    <a href="#" className="text-black text-sm ml-4">
                      <small className="block">Mail</small>
                      <strong>info@example.com</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <img className='' src="/icons/social/whatsapp.svg" alt="" />
                    </div>
                    <a href="#" className="text-black text-sm ml-4">
                      <small className="block">Support</small>
                      <strong>(+62) 812 3456 789</strong>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-gray-800 text-base font-bold">Socials</h2>

                <ul className="flex mt-4 space-x-4">
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="#">
                      <img src="/icons/social/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="#">
                      <img src="/icons/social/instagram.svg" alt="" />
                    </a>
                  </li>
                  <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="#">
                      <img src="/icons/social/linkedin.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <form className="ml-auo space-y-4">
              <input type='text' placeholder='Name'
                className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
              <input type='email' placeholder='Email'
                className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
              <input type='text' placeholder='Subject'
                className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" />
              <textarea placeholder='Message' rows="6"
                className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"></textarea>
              <button type='button'
                className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full !mt-6">Send</button>
            </form>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default ContactSection;