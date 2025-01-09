import Navbar from '../navbar.jsx';
import Footer from '../footer.jsx';
import data from '../../data/company-profile.json';

function AboutSection() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div className="bg-gray-100 px-6 py-12 font-sans">
      <h1 className="text-center font-bold text-2xl text-purple-700">About Us</h1>
      <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="max-h-80">
            <img 
              src="/logo.png" 
              alt="Bungkus Logo" 
              className="rounded-md object-cover w-full h-full" 
            />
          </div>
          
          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-purple-700 mb-4">
              Kami Hadir Untuk Menyediakan Solusi Kemasan Inovatif yang Menonjolkan Identitas Produk Anda
            </h2>
            <p className="text-gray-600 text-sm leading-6">
              {data.about}
            </p><br />
            <p>Kami Menawarkan</p>
            <ul className="list-disc text-sm text-gray-600 space-y-2 pl-4 mt-6">
              <li>Desain Kemasan Custom.</li>
              <li>Produksi Kemasan Beragam Material.</li>
              <li>Layanan Prototipe dan Sampel.</li>
              <li>Cetak dan Personalisasi Kemasan.</li>
              <li>Pengemasan Ramah Lingkungan.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
