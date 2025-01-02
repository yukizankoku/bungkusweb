function Products() {
    const productData = [
      { imageSrc: "/favicon.png", title: "Category Produk 1" },
      { imageSrc: "/favicon.png", title: "Category Produk 2" },
      { imageSrc: "/favicon.png", title: "Category Produk 3" },
    ];
  
    return (
      <div className="products">
        <h1 className="text-center text-3xl font-bold mb-5">
          Temukan Packaging Yang Tepat Untuk Bisnis Anda
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 gap-6 w-full">
          {productData.map((product, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={product.imageSrc}
                  alt={product.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                    {product.title}
                  </h5>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Products