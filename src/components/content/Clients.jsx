import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

function Clients() {
    const logos = [
      "/client/logo-client-1.jpeg",
      "/client/logo-client-2.jpeg",
      "/client/logo-client-3.jpeg",
      "/client/logo-client-4.jpeg",
      "/client/logo-client-5.jpeg",
      "/client/logo-client-6.jpeg",
      "/client/logo-client-7.jpeg",
      "/client/logo-client-8.jpeg",
      "/client/logo-client-9.jpeg",
      "/client/logo-client-10.jpeg",
      "/client/logo-client-11.jpeg",
    ];
  
    return (
      <div className="clients bg-cyan-200 p-10 text-center mb-10">
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
    );
  }

export default Clients