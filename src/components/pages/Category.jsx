import categories from "../../data/categories.json";
import products from "../../data/products.json";
import { useParams, Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

function CategorySection() {
  return (
    <div>
      <Navbar />
      <Category />
      <Footer />
    </div>
  )
}
function Category() {
  const { slug } = useParams();
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return <h1>Category not found</h1>;
  }

  const filteredProducts = products.filter(
    (product) => product.categoryId === category.id
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.slug}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-48 rounded-t-lg md:h-56"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                Deskripsi Produk
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link
          to="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg transition duration-200"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default CategorySection;
