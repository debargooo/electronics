import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveLink = (path) =>
    location.pathname === path
      ? "border border-gray-300 border-b-0 bg-white px-4 py-2 rounded-t-md text-black"
      : "px-4 py-2 text-gray-600";
  

  // Handle search submission
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchText.trim()) {
        navigate(`/products?q=${encodeURIComponent(searchText.trim())}`);
        setIsSearchOpen(false);
      }
    }
  };

  return (
    <header className="w-full bg-white py-4 relative z-50">
      <div className="max-w-[90vw] mx-auto flex items-center justify-between">
        
        {/* Search Bar */}
        <div className="flex items-center relative space-x-2">
          <FiSearch
            className="relative left-2 w-5 h-5 z-50 cursor-pointer text-black"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />

          {/* Search Input */}
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearchSubmit} // Enter key triggers search
            placeholder="Search brands..."
            className={`absolute transition-all duration-300 ease-in-out py-2 px-10 rounded border border-gray-300 shadow bg-white text-black
              ${isSearchOpen ? "w-80 opacity-100" : "w-0 opacity-0"}`
            }
            style={{ overflow: "hidden" }}
          />
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center">
          <img className="h-5 sm:h-15 mb-4" src={logo} alt="Logo" />

          {/* Desktop Nav */}
          {/* Desktop Nav */}
<div className="hidden lg:flex flex-col items-center mt-8">
  <div className="flex border-b border-gray-300 rounded-t-md">
    <Link to="/" className={getActiveLink("/")}>Home</Link>
    <a href="#" className={getActiveLink("/best-sellers")}>Best sellers</a>
    <Link to="/products" className={getActiveLink("/products")}>All Products</Link>
    <a href="#" className={getActiveLink("/trending")}>Trending</a>
    <a href="#" className={getActiveLink("/mobiles")}>Mobiles</a>
    <Link to="/about" className={getActiveLink("/about")}>About</Link>
    <a href="#" className={getActiveLink("/brands")}>Brands</a>
  </div>
</div>

        </div>

        {/* Right Icons */}
        <div className="flex space-x-8 text-black sm:hidden">
          <FiShoppingCart className="w-5 h-5" />
          {isMenuOpen ? <FiX className="w-5 h-5" onClick={() => setIsMenuOpen(false)} /> : <FiMenu className="w-5 h-5" onClick={() => setIsMenuOpen(true)} />}
        </div>

        {/* Right Icons for larger screens */}
        <div className="hidden sm:flex space-x-8 text-black">
          <FiShoppingCart className="w-5 h-5" />
          <FiMenu className="w-5 h-5" />
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col bg-white text-black text-lg font-medium px-6 py-4 absolute top-full left-0 w-full shadow-md sm:hidden">
          <Link to="/" className={getActiveLink("/")} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <a href="#" className={getActiveLink("/best-sellers")} onClick={() => setIsMenuOpen(false)}>Best sellers</a>
          <Link to="/products" className={getActiveLink("/products")} onClick={() => setIsMenuOpen(false)}>All Products</Link>
          <a href="#" className={getActiveLink("/trending")} onClick={() => setIsMenuOpen(false)}>Trending</a>
          <a href="#" className={getActiveLink("/mobiles")} onClick={() => setIsMenuOpen(false)}>Mobiles</a>
          <a href="#" className={getActiveLink("/accessories")} onClick={() => setIsMenuOpen(false)}>Accessories</a>
          <a href="#" className={getActiveLink("/brands")} onClick={() => setIsMenuOpen(false)}>Brands</a>
        </nav>
      )}
    </header>
  );
}
