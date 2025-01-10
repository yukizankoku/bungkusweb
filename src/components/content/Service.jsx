/* eslint-disable react/prop-types */
function Service() {
    return (
      <div className="service text-center mb-5">
        <section className="bg-cyan-200">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mb-8 lg:mb-16">
              <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-gray-900">
                Solusi Custom Packaging
              </h2>
              <p className="text-gray-500 text-center sm:text-xl">
                Kami berkomitmen untuk membuat box kemasan produk yang ramah lingkungan, dengan
                mengutamakan pelayanan yang memuaskan.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <ServiceItem
                imageSrc="/icons/solution.svg"
                title="Packaging Solution"
                description="Layanan konsultasi, sampel, dan produksi yang terintegrasi."
              />
              <ServiceItem
                imageSrc="/icons/custom-design.svg"
                title="Custom Desain & Ukuran"
                description="Kustomisasi kemasan produk sesuai kebutuhan bisnis. Cetak kemasan custom dengan layanan after sales responsif."
              />
              <ServiceItem
                imageSrc="/icons/perusahaan.svg"
                title="Perusahaan Terdaftar"
                description="Perusahaan berbadan hukum dan terdaftar secara resmi."
              />
              <ServiceItem
                imageSrc="/icons/konsultasi-order.svg"
                title="Konsultasi dan Order"
                description="Customer melakukan konsultasi dan membuat pesanan dengan mengirimkan desain, spesifikasi, serta contoh kemasan produk yang akan dibuat."
              />
              <ServiceItem
                imageSrc="/icons/proofing.svg"
                title="Proofing dan Produksi"
                description="Tim Bungkus melakukan proses produksi massal kemasan custom sesuai dengan pesanan, setelah melalui proofing dan persetujuan customer."
              />
              <ServiceItem
                imageSrc="/icons/pengiriman.svg"
                title="Pengiriman"
                description="Kemasan yang selesai diproduksi akan kami kirimkan secara langsung kepada customer. Tersedia layanan purna jual dan klaim hasil produk (S&K belaku)."
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  function ServiceItem({ imageSrc, title, description }) {
    return (
      <div className="relative bg-slate-400 rounded-md group text-center">
        {/* Gambar */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
        {/* Overlay yang muncul saat hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        {/* Title di bawah gambar */}
        <h3 className="mt-2 text-lg font-bold group-hover:hidden">{title}</h3>
      </div>
    );
  }

export default Service