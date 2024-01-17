import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "./../assets/mainlogo.webp";
import { useState } from "react";
import incart from "./../incart.json";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="py-8 bg-gray-300">
      <div className="container lg:flex justify-between items-center relative">
        <div className="logo w-36 flex items-center">
          <img src= {logo} alt="logo" loading="lazy" />
        </div>
        <ul className={isMobile? "nav-links-mobile" : "nav-links"}>
          <li className="mr-4 hover:text-blue-600"> <Link to="/">Home</Link> </li>
          <li className="mr-4 hover:text-blue-600 "> <Link to="/shop">Shop</Link> </li>
          <li className="mr-4 hover:text-blue-600"> <Link to="/blog">Blog</Link> </li>
          <li className="mr-4 hover:text-blue-600"> <Link to="/about">About</Link> </li>
          <li className="hover:text-blue-600"> <Link to="/contact">Contact</Link> </li>
        </ul>
        <div className="extra-list">
          <Link to='/cart' className="mr-4 mt-6 lg:mt-0 inline-block text-2xl hover:text-blue-600 relative">
            <span><i className="fi fi-sr-cart-shopping-fast"></i></span>
            {incart && incart !== false && <span className="absolute z-1 text-white bg-blue-500 px-2 py-1 rounded-full -right-2 -top-5 text-xs">{incart.cart.length}</span>}
            {/* {data && data != false && <h1>{console.log(data.length)}</h1>} */}
          </Link>
        </div>
        {/* mobile-icon */}
        <span className="menu-icon sm:inline lg:hidden mr-4 text-2xl  cursor-pointer absolute top-0 right-0"
        onClick={()=> setIsMobile(!isMobile)}>
          {isMobile? <i className="fi fi-bs-circle-xmark hover:text-red-600"></i>: <i className="fi fi-bs-menu-burger hover:text-blue-600"></i> }
        </span>

      </div>
    </nav>
  );
}

export default Navbar;