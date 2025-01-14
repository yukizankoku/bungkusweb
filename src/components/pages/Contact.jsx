/* eslint-disable react/prop-types */
import Navbar from '../navbar.jsx';
import Footer from '../footer.jsx';
import data from '../../data/company-profile.json';

function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

function Contact() {
  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 p-6 mx-auto max-w-6xl bg-gray-100 shadow-lg rounded-lg font-[sans-serif]">
        {/* Left Section */}
        <div>
          <h1 className="text-gray-800 text-3xl font-bold">Hubungi Kami!</h1>
          <p className="text-sm text-gray-600 mt-4">
            Jadikan produk Anda lebih menarik dan profesional dengan kemasan berkualitas dari CV. Asia Kreasi Solusi. Hubungi kami sekarang dan wujudkan kemasan terbaik untuk bisnis Anda!
          </p>
          <iframe
            className="border mt-5 w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1022461798384!2d106.7071420741316!3d-6.250256361196221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbcb04638ea5%3A0xffeb08215ea3061b!2sJl.%20Utama%20Puri%20Bintaro%20Hijau%20Blok%20F9%20No.11%2C%20RT.001%2FRW.007%2C%20Parung%20Serab%2C%20Kec.%20Ciledug%2C%20Kota%20Tangerang%2C%20Banten%2015153!5e0!3m2!1sid!2sid!4v1735632435229!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Contacts</h2>
            <ul className="mt-4 space-y-4">
              <ContactItem
                icon="/icons/social/address.svg"
                label="Address"
                value={data.address}
                link="#"
              />
              <ContactItem
                icon="/icons/social/email.svg"
                label="Email"
                value={data.email}
                link={`mailto:${data.email}`}
              />
              <ContactItem
                icon="/icons/social/whatsapp.svg"
                label="Support"
                value={data.phone}
                link={`https://wa.me/${data.phone.replace(/^0/, '62')}?text=Hai%20Bungkus,%20saya%20tertarik%20untuk%20membuat%20custom%20packaging`}
              />
            </ul>
          </div>

          {/* <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              <SocialIcon link="#" icon="/icons/social/facebook.svg" />
              <SocialIcon link="#" icon="/icons/social/instagram.svg" />
              <SocialIcon link="#" icon="/icons/social/linkedin.svg" />
            </ul>
          </div> */}
        </div>

        {/* Right Section */}
        <form
          className="space-y-4"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="ea6ad8a7-0f38-40d6-b2e5-a430e3dbe8cd"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="6"
            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, link }) {
  return (
    <li className="flex items-center">
      <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
        <img src={icon} alt={label} />
      </div>
      <a href={link} className="text-black text-sm ml-4">
        <small className="block">{label}</small>
        <strong>{value}</strong>
      </a>
    </li>
  );
}

// function SocialIcon({ link, icon }) {
//   return (
//     <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
//       <a href={link}>
//         <img src={icon} alt="social icon" />
//       </a>
//     </li>
//   );
// }

export default ContactSection;
