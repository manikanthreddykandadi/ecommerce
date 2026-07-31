import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";


function Navbar() {

  const [open, setOpen] = useState(false);


  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Products",
      path: "/products"
    },
    {
      name: "Cart",
      path: "/cart"
    },
  ];


  return (

    <nav className="bg-white shadow-md">

      <div className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-4
        py-4
        sm:px-6
        lg:px-8
      ">


        {/* Logo */}

        <Link
          to="/"
          className="
          text-2xl
          font-bold
          text-blue-600
          "
        >
          ShopMart
        </Link>



        {/* Desktop Menu */}

        <div
          className="
          hidden
          items-center
          gap-8
          md:flex
          "
        >

          {
            navLinks.map((link)=>(
              
              <Link
                key={link.name}
                to={link.path}
                className="
                text-gray-700
                transition
                hover:text-blue-600
                "
              >
                {link.name}
              </Link>

            ))
          }



          <Link
            to="/login"
            className="
            flex
            items-center
            gap-2
            rounded-lg
            bg-blue-600
            px-4
            py-2
            text-white
            hover:bg-blue-700
            "
          >

            <User size={18}/>

            Login

          </Link>


        </div>




        {/* Mobile Button */}


        <button

          onClick={()=>setOpen(!open)}

          className="
          md:hidden
          text-gray-700
          "

        >

          {
            open 
            ?
            <X size={28}/>
            :
            <Menu size={28}/>
          }


        </button>



      </div>





      {/* Mobile Menu */}


      {
        open && (

          <div
            className="
            flex
            flex-col
            gap-4
            border-t
            px-4
            py-5
            md:hidden
            "
          >


            {
              navLinks.map((link)=>(

                <Link

                  key={link.name}

                  to={link.path}

                  onClick={()=>setOpen(false)}

                  className="
                  text-gray-700
                  hover:text-blue-600
                  "

                >

                  {link.name}

                </Link>

              ))
            }



            <Link

              to="/login"

              onClick={()=>setOpen(false)}

              className="
              flex
              items-center
              gap-2
              "

            >

              <User size={18}/>

              Login

            </Link>


          </div>

        )
      }


    </nav>

  );
}


export default Navbar;