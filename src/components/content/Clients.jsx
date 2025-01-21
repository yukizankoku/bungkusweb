import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

function Clients() {
    const logos = [
      "/client/logo-client-1.png",
      "/client/logo-client-2.png",
      "/client/logo-client-3.png",
      "/client/logo-client-4.png",
      "/client/logo-client-5.jpeg",
      "/client/logo-client-6.png",
      "/client/logo-client-7.png",
      "/client/logo-client-8.png",
      "/client/logo-client-9.png",
      "/client/logo-client-10.png",
      "/client/logo-client-11.jpeg",
    ];
  
    return (
      <div className="flex justify-center items-center">
        <div className="clients bg-secondary bg-cover bg-center p-10 text-center rounded-3xl w-5/6" data-aos="fade-up"
        data-aos-duration="3000">
          <h1 className="text-3xl font-bold">
            Klien Kami
          </h1>
    
          <div className="autoplay-slider w-full overflow-hidden">
            <Swiper
              slidesPerView={10}
              spaceBetween={2}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={4000}
              modules={[Autoplay]}
              breakpoints={{
                // Atur breakpoint untuk layar kecil
                0: {
                  slidesPerView: 3, // Misalnya, 2 slide untuk layar sangat kecil
                },
                640: {
                  slidesPerView: 6, // 6 slide untuk layar kecil
                },
                1024: {
                  slidesPerView: 10, // 10 slide untuk layar besar
                },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={logo}
                    alt="client logo"
                    className="h-20 w-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }

export default Clients