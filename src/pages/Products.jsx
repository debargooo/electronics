import React, { useState, useEffect } from 'react';
import products from '../product_data.json';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { FaFilter } from "react-icons/fa";

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();

  const brands = [...new Set(products.map(p => p.name.split(" ")[0]))];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("q") || "");
  }, [location.search]);

  const filteredProducts = products.filter(p => {
    const brandMatch = selectedBrand ? p.name.startsWith(selectedBrand) : true;
    const ratingMatch = p.ratings >= minRating;
    const searchMatch = searchQuery ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return brandMatch && ratingMatch && searchMatch;
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);


  return (
    <>
      <Navbar />
      <div className="flex gap-6 px-6 py-8 bg-gray-50 min-h-screen flex-wrap lg:flex-nowrap">
        {/* Sidebar */}
       {/* Sidebar */}
<div className="w-full lg:w-64 bg-white p-4 rounded shadow mb-6 lg:mb-0">
  <div className="flex items-center justify-center lg:hidden mb-4 bg-blue-500 text-white">
    <button
      onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
      className="  px-4 py-2 rounded"
    >
      {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
    </button>
    <FaFilter />
  </div>

  <div className={`${mobileFiltersOpen ? '' : 'hidden'} lg:block`}>
    <h2 className="text-xl font-semibold mb-4">Filters</h2>

    {/* Brand Filter */}
    <div className="mb-4">
      <h4 className="font-medium mb-2">Brand</h4>
      {brands.map((brand) => (
        <div key={brand} className="flex items-center mb-1">
          <input
            type="radio"
            id={brand}
            name="brand"
            value={brand}
            onChange={() => setSelectedBrand(brand)}
            checked={selectedBrand === brand}
            className="mr-2"
          />
          <label htmlFor={brand}>{brand}</label>
        </div>
      ))}
      <button
        onClick={() => setSelectedBrand('')}
        className="text-blue-500 text-sm mt-2"
      >
        Clear Brand
      </button>
    </div>

    {/* Rating Filter */}
    <div className="mb-4">
      <h4 className="font-medium mb-2">Minimum Rating</h4>
      {[4.5, 4.0, 3.5, 3.0].map(rating => (
        <div key={rating} className="flex items-center mb-1">
          <input
            type="radio"
            name="rating"
            value={rating}
            onChange={() => setMinRating(rating)}
            checked={minRating === rating}
            className="mr-2"
          />
          <label>{rating} ★ & up</label>
        </div>
      ))}
      <button
        onClick={() => setMinRating(0)}
        className="text-blue-500 text-sm mt-2"
      >
        Clear Rating
      </button>
    </div>
  </div>
</div>


        {/* Product List */}
        <div className="flex-1 space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-600 text-xl mt-10">
              🚫 No products found .
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const { product_id, name, image_url, price, ratings, specifications, reviews } = product;
                const amazonPrice = price.amazon;
                const brandPrice = Object.values(price)[1];
                const lowerPrice = Math.min(amazonPrice, brandPrice);
                const originalPrice = Math.max(amazonPrice, brandPrice);
                const discount = Math.round(((originalPrice - lowerPrice) / originalPrice) * 100);

                return (
                  <div key={product_id} className="bg-white rounded shadow p-4 flex flex-col border border-gray-200">
                    <Link to={`/products/${product_id}`}>
                      <img src={image_url.preview} alt={name} className="w-full h-64 object-contain mb-4 bg-gray-200" />
                    </Link>

                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
                      <p className="text-yellow-500 font-medium mt-1">★ {ratings}</p>
                      <div className="text-lg font-bold mt-2 text-green-700">₹{amazonPrice}</div>
                      <div className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</div>
                      <ul className="text-sm mt-2 list-disc pl-5 text-gray-700">
                        {specifications.slice(0, 3).map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                      <button className="mt-3 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded w-fit">
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
