import categories from "../../data/categories.json";
import { Link } from "react-router-dom";

function Products() {
  console.log(categories);

  return (
    <div className="categories py-10 px-4">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Temukan Packaging Yang Tepat Untuk Bisnis Anda
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link to={`/category/${category.slug}`} className="block">
              <img
                className="w-full h-48 object-contain bg-zinc-300"
                src={category.image}
                alt={category.name}
              />
            </Link>
            <div className="p-5">
              <h5 className="text-center text-lg font-semibold text-gray-800">
                {category.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;