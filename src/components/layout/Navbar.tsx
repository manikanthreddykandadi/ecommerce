import { Heart, Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/ContextAuth";
import { useCart } from "../../contexts/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const { itemCount } = useCart();

  const closeMenu = () => setOpen(false);
  const signOut = () => { closeMenu(); void logout(); };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-blue-600">ShopMart</Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => <Link key={link.name} to={link.path} className="text-gray-700 hover:text-blue-600">{link.name}</Link>)}
          <Link to="/wishlist" aria-label="Wishlist" className="text-gray-700 hover:text-blue-600"><Heart size={19} /></Link>
          <Link to="/cart" aria-label="Cart" className="relative text-gray-700 hover:text-blue-600"><ShoppingCart size={19} />{itemCount > 0 && <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs text-white">{itemCount}</span>}</Link>
          {user ? <><Link to="/account" className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"><User size={18} /> Account</Link><button onClick={signOut} className="text-sm text-gray-600 hover:text-blue-600">Sign out</button></> : <Link to="/login" className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"><User size={18} /> Login</Link>}
        </div>
        <button onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} className="text-gray-700 md:hidden">{open ? <X size={28} /> : <Menu size={28} />}</button>
      </div>
      {open && <div className="flex flex-col gap-4 border-t px-4 py-5 md:hidden">
        {navLinks.map((link) => <Link key={link.name} to={link.path} onClick={closeMenu} className="text-gray-700">{link.name}</Link>)}
        <Link to="/wishlist" onClick={closeMenu} className="flex items-center gap-2 text-gray-700"><Heart size={18} /> Wishlist</Link>
        <Link to="/cart" onClick={closeMenu} className="flex items-center gap-2 text-gray-700"><ShoppingCart size={18} /> Cart ({itemCount})</Link>
        {user ? <><Link to="/account" onClick={closeMenu} className="flex items-center gap-2 text-gray-700"><User size={18} /> Account</Link><button onClick={signOut} className="text-left text-gray-700">Sign out</button></> : <Link to="/login" onClick={closeMenu} className="flex items-center gap-2 text-gray-700"><User size={18} /> Login</Link>}
      </div>}
    </nav>
  );
}

export default Navbar;
