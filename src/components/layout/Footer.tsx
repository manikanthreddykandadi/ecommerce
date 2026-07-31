import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-blue-400">
          ShopMart
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400">
          Your one-stop shop for quality products at affordable prices.
        </p>

        {/* Navigation Links */}
        <div className="mt-6 flex flex-wrap gap-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-400">
            Products
          </Link>

          <Link to="/cart" className="hover:text-blue-400">
            Cart
          </Link>

          <Link to="/login" className="hover:text-blue-400">
            Login
          </Link>
        </div>

        {/* Contact */}
        <div className="mt-6 text-gray-400">
          <p>Email: support@shopmart.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Hyderabad, India</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © 2026 ShopMart. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;