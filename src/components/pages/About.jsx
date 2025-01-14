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
      <h1 className="text-center font-bold text-2xl text-blue-700">About Us</h1>
      <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-gray-200 rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="max-h-80">
            <img 
              src="/logo.png" 
              alt="Bungkus Logo" 
              className="rounded-md object-fit w-full h-full" 
            />
          </div>
          
          {/* Content Section */}
          <div>
            <p className="text-gray-600 text-sm leading-6">
              <div dangerouslySetInnerHTML={{ __html: data.about }}></div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
