import categories from "../../data/categories.json";
import {Link} from "react-router-dom";

function Products() {  
    console.log(categories);
    
    return (
      <div className="categories">
        <h1 className="text-center text-3xl font-bold mb-5">
          Temukan Packaging Yang Tepat Untuk Bisnis Anda
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 gap-6 w-full">
        {categories.map((category, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <Link to={`/category/${category.slug}`}>
              <img
                className="rounded-t-lg"
                src={category.image}
                alt={category.name}
              />
            </Link>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                {category.name}
              </h5>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }

export default Products