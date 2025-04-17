import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Footer } from '../components/Footer';
import productData from '../product_data.json';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);

  useEffect(() => {
    setProducts(productData);
    setDeals(productData.slice(0, 3));
    setBestDeals(productData);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* BEST SELLERS SECTION */}
      <section className="w-full px-4 sm:px-8 mt-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold sm:text-center sm:w-[90%]">Best sellers</h2>
          <button className="text-sm font-medium text-gray-700 hover:underline flex items-center gap-1 w-fit">
            See All <span className="text-lg">→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.slice(6, 10).map((item, index) => {
  const priceKeys = Object.keys(item.price);
  const firstKey = priceKeys[0];
  const secondKey = priceKeys[1];

  return (
    <Link key={item.product_id} to={`/products/${item.product_id}`}>
      <div className="flex flex-col items-start gap-2 hover:scale-[1.02] transition-transform">
        <img
          src={item.image_url.preview}
          alt={item.name}
          className="w-full aspect-[3/4] object-contain bg-[#eee] rounded-lg"
        />
        <h3 className="text-sm sm:text-base font-medium text-gray-900 w-full truncate">
          {item.name}
        </h3>

        <div className="text-sm capitalize">
          <p className={item.price[firstKey] < item.price[secondKey] ? "text-green-600" : "text-gray-500"}>
            {firstKey} - ₹{item.price[firstKey]}
          </p>
          <p className={item.price[secondKey] < item.price[firstKey] ? "text-green-600" : "text-gray-500"}>
            {secondKey} - ₹{item.price[secondKey]}
          </p>
        </div>
      </div>
    </Link>
  );
})}

        </div>
      </section>

      {/* TRENDY SECTION */}
      <section className="px-4 py-8">
        <div className="max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main large image */}
          <div className="md:col-span-2 relative h-[60vh] sm:h-[80vh]">
            {deals[0] && (
              <Link to={`/products/${deals[0].product_id}`}>
              <img
                src={deals[0].image_url.preview}
                alt={deals[0].name}
                className="w-full h-full object-contain rounded-lg bg-gradient-to-b from-[#b9c3f2] to-[#d3e4f7]"
              />
              </Link>
              
            )}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 text-black px-4 py-2 rounded-md font-semibold text-base sm:text-lg md:text-xl">
              TRENDY
            </div>
          </div>

          {/* Secondary images */}
          <div className="flex flex-col gap-4">
            {deals.slice(1, 3).map((item, index) => (
              <div key={index} className="relative h-[30vh] sm:h-[40vh]">
                <Link key={item.product_id} to={`/products/${item.product_id}`}>
                <img
                  src={item.image_url.preview}
                  alt={item.name}
                  className="w-full h-full object-contain rounded-lg bg-gradient-to-r from-[#b9c3f2] to-[#baaeca]"
                />
                <div className="absolute bottom-2 left-2 bg-white bg-opacity-70 text-black px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
                  {item.name.slice(0, 30)}...
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST DEALS SECTION */}
      <section className="w-full px-4 sm:px-8 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold sm:text-center sm:w-[90%]">Best Deals</h2>
          <button className="text-sm font-medium text-gray-700 hover:underline flex items-center gap-1 w-fit">
            See All <span className="text-lg">→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.slice(3, 7).map((item, index) => {
  const priceKeys = Object.keys(item.price);
  const firstKey = priceKeys[0];
  const secondKey = priceKeys[1];

  return (
    <Link key={item.product_id} to={`/products/${item.product_id}`}>
      <div className="flex flex-col items-start gap-2 hover:scale-[1.02] transition-transform">
        <img
          src={item.image_url.preview}
          alt={item.name}
          className="w-full aspect-[3/4] object-contain bg-[#eee] rounded-lg"
        />
        <h3 className="text-sm sm:text-base font-medium text-gray-900 w-full truncate">
          {item.name}
        </h3>

        <div className="text-sm capitalize">
          <p className={item.price[firstKey] < item.price[secondKey] ? "text-green-600" : "text-gray-500"}>
            {firstKey} - ₹{item.price[firstKey]}
          </p>
          <p className={item.price[secondKey] < item.price[firstKey] ? "text-green-600" : "text-gray-500"}>
            {secondKey} - ₹{item.price[secondKey]}
          </p>
        </div>
      </div>
    </Link>
  );
})}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
