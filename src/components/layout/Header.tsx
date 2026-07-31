import Navbar from "./Navbar";


function Header() {

  return (

    <header className="w-full">

      {/* Top Announcement Bar */}

      <div
        className="
        bg-blue-600
        py-2
        text-center
        text-sm
        font-medium
        text-white
        "
      >

        Free shipping on orders above ₹999

      </div>



      {/* Main Navigation */}

      <Navbar />


    </header>

  );

}


export default Header;