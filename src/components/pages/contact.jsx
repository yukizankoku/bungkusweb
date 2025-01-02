/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Navbar from '../navbar.jsx';
import Footer from '../footer.jsx';

function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function ContactForm() {
  return (
    <section className="mt-6 px-4">
      <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto bg-white shadow-lg rounded-md font-sans">
        {/* Left Section */}
        <div>
        <iframe className="border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1022461798384!2d106.7071420741316!3d-6.250256361196221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbcb04638ea5%3A0xffeb08215ea3061b!2sJl.%20Utama%20Puri%20Bintaro%20Hijau%20Blok%20F9%20No.11%2C%20RT.001%2FRW.007%2C%20Parung%20Serab%2C%20Kec.%20Ciledug%2C%20Kota%20Tangerang%2C%20Banten%2015153!5e0!3m2!1sid!2sid!4v1735632435229!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* Contact Info */}
          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Contacts</h2>
            <ul className="mt-4 space-y-4">
              <ContactInfo icon="address" label="Address" value="JL Raya Pondok Aren Komplek Puri Bintaro Hijau Blok F9 no. 3" />
              <ContactInfo icon="email" label="Mail" value="info@example.com" />
              <ContactInfo icon="phone" label="Phone" value="+62 1234566776" />
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              <SocialIcon link="#" platform="facebook" />
              {/* Tambahkan sosial media lainnya */}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
            <h1 className="text-gray-800 text-3xl font-bold">Let&apos;s Talk</h1>
            <p className="text-sm text-gray-500 mt-4">
                Have some big idea or brand to develop and need help? Then reach out, we&apos;d love to hear about your project and provide help.
            </p>
          <form>
            <div className="grid gap-6 mt-5">
              <input
                type="text"
                className="p-3 border border-gray-300 rounded-md"
                placeholder="Your Name"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                className="p-3 border border-gray-300 rounded-md"
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
              <textarea
                rows="4"
                className="p-3 border border-gray-300 rounded-md"
                placeholder="Your Message"
                aria-label="Your Message"
                required
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }) {
  const icons = {
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#007bff" viewBox="0 0 24 24">
        <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 18.2a6.2 6.2 0 116.2-6.2 6.2 6.2 0 01-6.2 6.2z" />
      </svg>
    ),
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#007bff" viewBox="0 0 24 24">
        <path d="M12 12l8-6H4z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#007bff" viewBox="0 0 24 24">
        <path d="M6 2a1 1 0 011-1h10a1 1 0 011 1v1H6zm0 3h12v14H6z" />
      </svg>
    ),
  };

  return (
    <li className="flex items-center">
      <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
        {icons[icon]}
      </div>
      <a href="#" className="text-blue-500 text-sm ml-4">
        <small className="block">{label}</small>
        <strong>{value}</strong>
      </a>
    </li>
  );
}

function SocialIcon({ link, platform }) {
  const platforms = {
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#007bff" viewBox="0 0 24 24">
        <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75z" />
      </svg>
    ),
  };

  return (
    <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {platforms[platform]}
      </a>
    </li>
  );
}

export default ContactSection;
