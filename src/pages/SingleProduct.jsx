import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../product_data.json';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import logo from '../assets/Logo.png';

const SingleProduct = () => {
  const { productId } = useParams();
  const [selectedLogo, setSelectedLogo] = useState("amazon"); // Default to Amazon

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const product = products.find(p => p.product_id === productId);

  if (!product) return <div className="text-center mt-10 text-gray-600">Product not found</div>;

  // Dynamic price keys
  const priceKeys = Object.keys(product.price);
  const firstKey = priceKeys[0];
  const secondKey = priceKeys[1];
  const firstPrice = product.price[firstKey];
  const secondPrice = product.price[secondKey];
  const discount = Math.round((1 - Math.min(firstPrice, secondPrice) / Math.max(firstPrice, secondPrice)) * 100);
  const bestSeller = firstPrice < secondPrice ? firstKey : secondKey;
  

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Left - Product Images */}
        <div>
          <div className="w-full border rounded-xl overflow-hidden">
            <img src={product.image_url.preview} alt={product.name} className="w-full object-contain" />
          </div>
          <div className="flex gap-4 mt-4">
            <img src={product.image_url.img1} alt="img1" className="w-24 h-24 object-contain border rounded-lg p-1" />
            <img src={product.image_url.img2} alt="img2" className="w-24 h-24 object-contain border rounded-lg p-1" />
          </div>
        </div>

        {/* Right - Info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="uppercase text-sm text-gray-500 font-medium">Brand</p>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-600">({product.reviews.length} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-black">₹{Math.min(firstPrice, secondPrice)}</span>
            <span className="line-through text-gray-500">₹{Math.max(firstPrice, secondPrice)}</span>
            <span className="bg-yellow-400 text-black text-sm px-2 py-1 rounded-lg">
              -{discount}%
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2 cursor-pointer">
            <div
              className={`border rounded-lg p-4 text-center shadow flex flex-col items-center justify-center ${selectedLogo === "amazon" ? 'border-4 border-yellow-500' : ''}`}
              onClick={() => setSelectedLogo("amazon")}
            >
              <p className='capitalize'>{firstKey}</p>
              <p className="font-semibold text-lg text-black">₹{firstPrice}</p>
            </div>
            <div
              className={`border rounded-lg p-4 text-center shadow flex flex-col items-center justify-between ${selectedLogo === "brand" ? 'border-4 border-yellow-500' : ''}`}
              onClick={() => setSelectedLogo("brand")}
            >
               <p className='capitalize'>{secondKey}</p>
              <p className="text-lg font-medium text-black">₹{secondPrice}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <p className="text-black">
              Buy from <span className="text-yellow-600 font-semibold">Amazon</span> and get 5% discount from
            </p>
            <img className="h-5" src={logo} />
          </div>

          <div>
          <ul className="text-sm mt-2 list-disc pl-5 text-gray-700">
                  {product.specifications.slice(0, 3).map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">Buy one click</button>
            <button className="bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-semibold">Add to cart</button>
          </div>
        </div>

        {/* Reviews */}
        <div className="md:col-span-2 mt-12">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Customer Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            <div className="grid gap-4">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="border p-4 rounded-lg shadow-sm bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-500">★★★★☆</span>
                    <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{review}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
